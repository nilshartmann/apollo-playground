const ProjectSchema = `
type Project {
		id: ID!,
		key: String!,
		title: String!,
		description: String!,
		owner: User!
		activities: [Activity]
  }
`;

export default ProjectSchema;
