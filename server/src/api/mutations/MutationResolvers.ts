// https://dev-blog.apollodata.com/designing-graphql-mutations-e09de826ed97
import { Repositories } from '../../app-types';

import {
	ActivityState,
	CreateUserInput, CreateUserPayload,
	UpdateUserInput, UpdateUserPayload,
	CreateProjectInput, CreateProjectPayload,
	UpdateProjectInput, UpdateProjectPayload,
	PromoteActivityInput, PromoteActivityPayload,
	AddActivityInput, AssignActivityInput
} from '../../domain';

export const createMutations = ({ userRepository, projectRepository, activityRepository }: Repositories) => ({
	addActivity(_: {}, { input }: { input: AddActivityInput }) {
		return { newActivity: activityRepository.addActivity(input) }
	},
	assignActivity(_: {}, { input }: { input: AssignActivityInput }) {
		return { activity: activityRepository.assignActivity(input.activityId, input.assigneeId) }
	},
	promoteActivity(_: {}, { input }: { input: PromoteActivityInput }): PromoteActivityPayload {
		return activityRepository.promoteActivity(input.activityId);
	},
	createUser(_: {}, { input }: { input: CreateUserInput }): CreateUserPayload {
		return { newUser: userRepository.createUser(input) };
	},
	updateUser(_: {}, { input }: { input: UpdateUserInput }): UpdateUserPayload {
		return { updatedUser: userRepository.updateUser(input) }
	},
	createProject(_: {}, { input }: { input: CreateProjectInput }): CreateProjectPayload {
		return { newProject: projectRepository.createProject(input) };
	},
	updateProject(_: {}, { input }: { input: UpdateProjectInput }): UpdateProjectPayload {
		return { updatedProject: projectRepository.updateProject(input) };
	}
});

