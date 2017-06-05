export const MutationTypeDef = `
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
