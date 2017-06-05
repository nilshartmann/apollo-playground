import { UserRepository, ProjectRepository, ActivityRepository } from './domain';

export type Repositories = {
	userRepository: UserRepository,
	projectRepository: ProjectRepository,
	activityRepository: ActivityRepository
}
