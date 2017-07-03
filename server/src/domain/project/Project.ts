import { Optional, Id } from '../common';

import { User } from '../user/User'

export class Project {
	userId: Id;

	constructor(public id: Id, public title: string, public description: string, user: User) {
		this.userId = user.id;
	}
}

export type ProjectRepository = {
	createProject: ({ description, ownerId, title }: CreateProjectInput) => Project;
	updateProject: ({ id, description, title }: UpdateProjectInput) => Project;
	findAll: () => Project[],
	getById: (id: Id) => Project,
	findById: (id: Id) => Optional<Project>,
	projectsForUser: (userId: Id) => Project[];
}

export type ProjectConnection = {
	totalCount: number,
	projects: Project[]
}

export type CreateProjectInput = {
	title: string,
	description: string,
	ownerId: Id
};

export type CreateProjectPayload = {
	newProject: Project
}

export type UpdateProjectInput = {
	id: Id,
	title: string,
	description: string
};

export type UpdateProjectPayload = {
	updatedProject: Project
}
