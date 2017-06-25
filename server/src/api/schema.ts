import { makeExecutableSchema } from 'graphql-tools';
import { Repositories } from '../app-types';
import UserSchema from './schemas/UserSchema';
import ProjectSchema from './schemas/ProjectSchema';
import ActivitySchema from './schemas/ActivitySchema';

import {
	Id, User, Activity,
	ActivityState, Project
} from '../domain';

import { MutationTypeDef, createMutations } from './mutations';

const RootQuery = `
	# Queries to get into the application model.
	type RootQuery {
		# Find a User by it's Id
    user(id: String!): User!
		project(id: String!): Project!
		# Return a list of all projects. Rembember: all projects are "public"
		# (and not visible to only it's owner)
		projects: [Project]
  }`;

const SchemaDefinition = `
  schema {
    query: RootQuery,
		mutation: Mutations
  }
`;

const createResolveFunctions = (repositories: Repositories) => {

	const { userRepository, projectRepository, activityRepository } = repositories;

	return {
		Mutations: createMutations(repositories),

		RootQuery: {
			user(obj: any, { id }: { id: Id }) {
				return userRepository.findById(id);
			},
			project(obj: any, { id }: { id: Id }) {
				return projectRepository.findById(id);
			},
			projects() {
				return projectRepository.findAll();
			}
		},

		User: {
			projects(obj: User) {
				return projectRepository.projectsForUser(obj.id);
			},
			activities(user: User) {
				return activityRepository.findForUser(user.id)
			}
		},
		Project: {
			async owner(object: Project) {
				return await userRepository.findById(object.userId)
			},

			activities(project: Project) {
				return activityRepository.findForProject(project);
			},

			activity(project: Project, { activityId }: { activityId: Id }) {
				return activityRepository.getActivityInProject(project, activityId);
			},

			latestActivity(project: Project): Activity {
				// for now simply return the first activity
				return activityRepository.findForProject(project)[0]
			}
		},
		Activity: {
			creator(activity: Activity) {
				return userRepository.findById(activity.creatorId)
			},
			project(activity: Activity) {
				return projectRepository.findById(activity.projectId)
			},
			assignee(activity: Activity) {
				return userRepository.findById(activity.assigneeId)
			},
			nextAction(activity: Activity) {
				switch (activity.state) {
					case ActivityState.CREATED:
						return "Start Activity"
					case ActivityState.STARTED:
						return "Finish Activity"
					default:
						return null
				}
			}

		}
	};
}

const createSchema = (repositories: Repositories) => {
	return makeExecutableSchema({
		typeDefs: [
			SchemaDefinition, RootQuery, MutationTypeDef, UserSchema, ProjectSchema, ActivitySchema
		],
		resolvers: createResolveFunctions(repositories),
	})
};

export default createSchema;
