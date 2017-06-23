import { User, createDefaultUserRepository } from './domain/user';
import { Project, createDefaultProjectRepository } from './domain/project';
import { Activity, ActivityState, createDefaultActivityRepository } from './domain/activity';

const USERS = [
	new User('U1', 'nils', 'Nils', 'nils@nilshartmann.net'),
	new User('U2', 'susi', 'Susi', 'susi@susi.de'),
	new User('U3', 'klaus', 'Klaus', 'info@klaus.de'),
	new User('U4', 'heinz', 'Heinz', 'info@heinz.eu'),
	new User('U5', 'gerd', 'Gerd', 'gerd@mail.com'),
	new User('U6', 'ulla', 'Ulla', 'ulla@ulla.org'),
	new User('U7', 'alex', 'Alex', 'info@alex.de'),
];

const PROJECTS = [
	new Project('P1', 'Create GraphQL Talk', 'Create GraphQL Talk', USERS[0]),
	new Project('P2', 'Book Trip to Barcelona', 'Organize and book a nice 4-day trip to Barcelona in April', USERS[1]),
	new Project('P3', 'Clean the House', 'Its spring time! Time to clean up every room', USERS[2]),
	new Project('P4', 'Refactor Application', 'We have some problems in our architecture, so we need to refactor it', USERS[0]),
];

const ACTIVITIES = [
	new Activity('A1', 'Create a draft story', PROJECTS[0], USERS[0], ActivityState.STARTED),
	new Activity('A2', 'Finish Example App', PROJECTS[0], USERS[0], ActivityState.CREATED),
	new Activity('A3', 'Design Slides', PROJECTS[0], USERS[4], ActivityState.CREATED),

	new Activity('A4', 'Find a flight', PROJECTS[1], USERS[1], ActivityState.CREATED),
	new Activity('A5', 'Book a hostel', PROJECTS[1], USERS[1], ActivityState.FINISHED),

	new Activity('A6', 'Clean dining room', PROJECTS[2], USERS[2], ActivityState.CREATED),
	new Activity('A7', 'Clean kitchen', PROJECTS[2], USERS[2], ActivityState.CREATED),
	new Activity('A8', 'Empty trash bin', PROJECTS[2], USERS[2], ActivityState.FINISHED),
	new Activity('A9', 'Clean windows', PROJECTS[2], USERS[2], ActivityState.STARTED),

	new Activity('A10', 'Discuss problems with all developers', PROJECTS[3], USERS[0], ActivityState.STARTED),
	new Activity('A11', 'Evaluate GraphQL for API', PROJECTS[3], USERS[5], ActivityState.STARTED),
	new Activity('A12', 'Re-write tests in Jest', PROJECTS[3], USERS[4], ActivityState.STARTED),
	new Activity('A13', 'Upgrade NodeJS version', PROJECTS[3], USERS[6], ActivityState.FINISHED),
]

const userRepository = createDefaultUserRepository(USERS);
const projectRepository = createDefaultProjectRepository(userRepository, PROJECTS);
const activityRepository = createDefaultActivityRepository(userRepository, projectRepository, ACTIVITIES);

export default () => ({
	userRepository,
	projectRepository,
	activityRepository
});
