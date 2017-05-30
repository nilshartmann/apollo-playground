import { makeExecutableSchema } from 'graphql-tools';

import UserSchema from './schemas/UserSchema';
import ProjectSchema from './schemas/ProjectSchema';
import ActivitySchema from './schemas/ActivitySchema';

import {
	Id, User, Activity,
	CreateUserInput, CreateUserPayload,
	UpdateUserInput, UpdateUserPayload,
	CreateProjectInput, CreateProjectPayload,
	UpdateProjectInput, UpdateProjectPayload,
	PromoteActivityInput, PromoteActivityPayload, ActivityState, Project, UserRepository, ProjectRepository, ActivityRepository, AddActivityInput, AssignActivityInput
} from '../model/UserModel';

const RootQuery = `
	type RootQuery {
		# Find a User by it's Id
    user(id: String!): User!
		project(id: String!): Project!
		projects: [Project]
  }`;

// https://dev-blog.apollodata.com/designing-graphql-mutations-e09de826ed97

const Mutations = `
	input AddActivityInput {
		title: String!,
		description: String!,
		projectId: ID!,
		creatorId: ID
	}

	input AssignActivityInput {
		activityId: ID!,
		assigneeId: ID!
	}

	type AddActivityPayload {
		newActivity: Activity!
	}

	type AssignActivityPayload {
		activity: Activity!
	}

	input PromoteActivityInput {
		activityId: ID!
	}

	type PromoteActivityPayload {
		promoteSuccessful: Boolean!
		activity: Activity!
	}

	input CreateUserInput {
		login: String!,
		name: String!,
		email: String!
	}

	type CreateUserPayload {
		newUser: User!
	}

	input UpdateUserInput {
		id: ID!,

		name: String!
		email: String
	}

	type UpdateUserPayload {
		updatedUser: User!
	}


	input CreateProjectInput {
		key: String!,
		title: String!,
		description: String!,
		ownerId: ID!
	}

	type CreateProjectPayload {
		newProject: Project!
	}

	input UpdateProjectInput {
		id: ID!,
		title: String!,
		description: String!
	}

	type UpdateProjectPayload {
		updatedProject: Project!
	}

	type Mutations {
		createUser(input: CreateUserInput!): CreateUserPayload!
		updateUser(input: UpdateUserInput!): UpdateUserPayload!

		createProject(input: CreateProjectInput!): CreateProjectPayload!
		updateProject(input: UpdateProjectInput!): UpdateProjectPayload!

		addActivity(input: AddActivityInput!): AddActivityPayload!
		assignActivity(input: AssignActivityInput!): AssignActivityPayload!
		promoteActivity(input: PromoteActivityInput!): PromoteActivityPayload!
	}
`;


const SchemaDefinition = `
  schema {
    query: RootQuery,
		mutation: Mutations
  }
`;

const resolveFunctions = {
	Mutations: {
		addActivity(_: {}, { input }: { input: AddActivityInput }) {
			return { newActivity: ActivityRepository.addActivity(input) }
		},
		assignActivity(_: {}, { input }: { input: AssignActivityInput }) {
			return { activity: ActivityRepository.assignActivity(input.activityId, input.assigneeId) }
		},
		promoteActivity(_: {}, { input }: { input: PromoteActivityInput }): PromoteActivityPayload {
			return ActivityRepository.promoteActivity(input.activityId);
		},
		createUser(_: {}, { input }: { input: CreateUserInput }): CreateUserPayload {
			return { newUser: UserRepository.createUser(input) };
		},
		updateUser(_: {}, { input }: { input: UpdateUserInput }): UpdateUserPayload {
			return { updatedUser: UserRepository.updateUser(input)}
		},
		createProject(_: {}, { input }: { input: CreateProjectInput }): CreateProjectPayload {
			return { newProject: ProjectRepository.createProject(input) };
		},
		updateProject(_: {}, { input }: { input: UpdateProjectInput }): UpdateProjectPayload {
			return { updatedProject: ProjectRepository.updateProject(input) };
		}
	},

	RootQuery: {
		user(obj: any, { id }: { id: Id }) {
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
		},
		activities(user: User) {
			return ActivityRepository.findForUser(user.id)
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
		},
		assignee(activity: Activity) {
			return UserRepository.findById(activity.assigneeId)
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

export default makeExecutableSchema({
	typeDefs: [
		SchemaDefinition, RootQuery, Mutations, UserSchema, ProjectSchema, ActivitySchema
	],
	resolvers: resolveFunctions,
});
