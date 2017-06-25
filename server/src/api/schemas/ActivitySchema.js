const ActivitySchema = `
enum ActivityState {
	CREATED,
	STARTED,
	FINISHED
}

type Activity {
		id: ID!,
		title: String!,
		description: String!,
		project: Project!,
		creator: User!,
		assignee: User!
		state: ActivityState!
		nextAction: String
  }
`;

export default ActivitySchema
	;
