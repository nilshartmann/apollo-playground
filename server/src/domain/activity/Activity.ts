import { Optional, Id } from '../common';
import { User } from '../user/User';
import { Project } from '../project/Project';
// http://angularfirst.com/typescript-string-enums/

export const ActivityState = {
	CREATED: 'CREATED' as 'CREATED',
	STARTED: 'STARTED' as 'STARTED',
	FINISHED: 'FINISHED' as 'FINISHED'
}
export type ActivityState = (typeof ActivityState)[keyof typeof ActivityState];

export type AddActivityInput = {
	title: string,
	description: string,
	projectId: Id,
	creatorId: Id
}

export type AssignActivityInput = {
	activityId: Id,
	assigneeId: Id
}

export type PromoteActivityInput = {
	activityId: Id
}

export type PromoteActivityPayload = {
	promoteSuccessful: boolean,
	activity: Activity
}

export class Activity {
	projectId: Id;
	creatorId: Id;
	assigneeId: Id;

	constructor(public id: Id, public title: string, project: Project, creator: User, public state: ActivityState) {
		this.projectId = project.id;
		this.creatorId = creator.id;
		this.assigneeId = creator.id;
	}
}

export type ActivityRepository = {
	getById: (id: Id) => Activity,
	findForProject: (project: Project) => Activity[];
	findForUser: (userId: Id) => Activity[];
	getActivityInProject: (project: Project, activityId: Id) => Activity;
	addActivity: (activityInput: AddActivityInput) => Activity;
	assignActivity: (activityId: Id, assigneeId: Id) => Activity;
	promoteActivity: (activityId: Id) => PromoteActivityPayload;
}
