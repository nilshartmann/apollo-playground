const UserSchema = `
type ActivityConnection {
	totalCount: Int!,
	activities: [Activity]
}

type ProjectConnection {
	totalCount: Int!,
	projects: [Project]
}

type User {
		id: ID!,
		login: String!,
		name: String!,
		email: String,
		projects: ProjectConnection!,
		activities: ActivityConnection!
  }
`;

// dasd fasdfsd

export default UserSchema;

