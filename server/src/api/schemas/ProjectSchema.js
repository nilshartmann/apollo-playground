const ProjectSchema = `
type Project {
		id: ID!,
		key: String!,
		title: String!,
		description: String!,
		owner: User!
		activities: [Activity],
		latestActivity: Activity!
  }
`;

export default ProjectSchema;
