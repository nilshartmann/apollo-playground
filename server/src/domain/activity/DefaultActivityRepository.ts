import { Optional, Id, newId } from '../common';
import { UserRepository } from '../user/User';
import { Project, ProjectRepository, CreateProjectInput, UpdateProjectInput } from '../project/Project';
import { Activity, ActivityState, ActivityRepository, AddActivityInput, PromoteActivityPayload } from './Activity';

export const createDefaultActivityRepository = (userRepository: UserRepository,
	projectRepository: ProjectRepository,
	initialActivities: Activity[]
): ActivityRepository => {

	const ACTIVITIES = [...initialActivities];

	const DefaultActivityRepository = {
		getById: (id: Id): Activity => {
			const activity = ACTIVITIES.find(p => p.id === id);
			if (!activity) {
				throw new Error(`Could not find Activity with Id '${id}'`);
			}
			return activity;
		},

		findForProject: (project: Project): Activity[] => ACTIVITIES.filter(a => a.projectId === project.id),
		findForUser: (userId: Id): Activity[] => ACTIVITIES.filter(a => a.assigneeId == userId),

		getActivityInProject: (project: Project, activityId: Id): Activity => console.log('ACTIVITYID', activityId) || DefaultActivityRepository.getById(activityId),

		addActivity: (activityInput: AddActivityInput): Activity => {
			const project = projectRepository.getById(activityInput.projectId);
			const creator = userRepository.getById(activityInput.creatorId);

			const newActivity = new Activity(
				newId('A'), activityInput.title, activityInput.description, project, creator, ActivityState.CREATED
			);

			ACTIVITIES.push(newActivity);

			return newActivity;
		},

		assignActivity: (activityId: Id, assigneeId: Id): Activity => {
			const activity = DefaultActivityRepository.getById(activityId);
			const assignee = userRepository.getById(assigneeId);

			activity.assigneeId = assignee.id;

			return activity;
		},

		promoteActivity: (activityId: Id): PromoteActivityPayload => {
			const activity = DefaultActivityRepository.getById(activityId);

			let newState: ActivityState | null = null;

			switch (activity.state) {
				case ActivityState.CREATED:
					newState = ActivityState.STARTED;
					break;
				case ActivityState.STARTED:
					newState = ActivityState.FINISHED;
					break;
			}

			if (newState) {
				activity.state = newState;
			}

			return {
				promoteSuccessful: newState !== null,
				activity
			}
		}
	}

	return DefaultActivityRepository;
}
