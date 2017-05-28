import { makeExecutableSchema } from 'graphql-tools';

import UserSchema from './schemas/UserSchema';
import ProjectSchema from './schemas/ProjectSchema';
import ActivitySchema from './schemas/ActivitySchema';

import { Id, User, Activity, Project, UserRepository, ProjectRepository, ActivityRepository } from '../model/UserModel';

const RootQuery = `
	type RootQuery {
    user(id: String!): User!
		project(id: String!): Project!
		projects: [Project]
  }`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const resolveFunctions = {
	RootQuery: {
		user(obj: any, { id }: { id: Id }) {
			console.log(' Object: ', obj, id);
			return UserRepository.findById(id);
		},
		project(obj: any, { id }: { id: Id }) {
			return ProjectRepository.findById(id);
		},
		projects() {
			return ProjectRepository.findAll();
		}
	},
	User: {
		projects(obj: User) {
			return ProjectRepository.projectsForUser(obj.id);
		}
	},
	Project: {
		owner(object: Project) {
			return UserRepository.findById(object.userId)
		},

		activities(project: Project) {
			return ActivityRepository.findForProject(project);
		}
	},
	Activity: {
		creator(activity: Activity) {
			return UserRepository.findById(activity.creatorId)
		},
		project(activity: Activity) {
			return ProjectRepository.findById(activity.projectId)
		}
	}
};

export default makeExecutableSchema({
	typeDefs: [
		SchemaDefinition, RootQuery, UserSchema, ProjectSchema, ActivitySchema
	],
	// we could also concatenate arrays
	// typeDefs: [SchemaDefinition, RootQuery].concat(Post)
	resolvers: resolveFunctions,
});
