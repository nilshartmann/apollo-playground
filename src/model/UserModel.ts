type Id = string;

class User {
    id: Id;
    login: string;
    name: string;
    email: string;
    constructor(id: Id, login: string, name: string, email: string) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.email = email;
    }
}


// http://angularfirst.com/typescript-string-enums/
const ActivityState = {
  CREATED: 'CREATED' as 'CREATED',
  STARTED: 'STARTED' as 'STARTED',
  FINISHED: 'FINISHED' as 'FINISHED'
}
type ActivityState = (typeof ActivityState)[keyof typeof ActivityState];


class Activity {
    id: string;
    title: string;
    projectId: Id;
    creatorId: Id;
    state: ActivityState;

    constructor(id: Id, title: string, project: Project, creator: User, state: ActivityState) {
        this.id = id;
        this.title = title;
        this.projectId = project.id;
        this.creatorId = creator.id;
        this.state = state;
    }
}

class Project {
    id: string;
    key: string;
    title: string;
    description: string;
    userId: Id;

    constructor(id: Id, key: string, title: string, description: string, user: User) {
        this.id = id;
        this.key = key;
        this.title = title;
        this.description = description;
        this.userId = user.id;
    }

}

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
    new Project('P1', 'GQLTALK', 'Create GraphQL Talk', 'Create GraphQL Talk', USERS[0]),
    new Project('P2', 'TTBCN', 'Book Trip to Barcelona', 'Organize and book a nice 4-day trip to Barcelona in April', USERS[1]),
    new Project('P3', 'CHOUSE', 'Clean the House', 'Its spring time! Time to clean up every room', USERS[2]),
    new Project('P4', 'REFAPP', 'Refactor Application', 'We have some problems in our architecture, so we need to refactor it', USERS[0]),
];

const ACTIVITIES = [
    new Activity('A1', 'Create a draft story', PROJECTS[0], USERS[0],ActivityState.STARTED),
    new Activity('A2', 'Finish Example App', PROJECTS[0], USERS[0],ActivityState.CREATED),
    new Activity('A3', 'Design Slides', PROJECTS[0], USERS[4], ActivityState.CREATED),

    new Activity('A4', 'Find a flight', PROJECTS[1], USERS[1],ActivityState.CREATED),
    new Activity('A5', 'Book a hostel', PROJECTS[1], USERS[1], ActivityState.FINISHED),

    new Activity('A6', 'Clean dining room', PROJECTS[2], USERS[2],ActivityState.CREATED),
    new Activity('A7', 'Clean kitchen', PROJECTS[2], USERS[2],ActivityState.CREATED),
    new Activity('A8', 'Empty trash bin', PROJECTS[2], USERS[2],ActivityState.FINISHED),
    new Activity('A9', 'Clean windows', PROJECTS[2], USERS[2], ActivityState.STARTED),

    new Activity('A10', 'Discuss problems with all developers', PROJECTS[3], USERS[0],ActivityState.STARTED),
    new Activity('A11', 'Evaluate GraphQL for API', PROJECTS[3], USERS[5],ActivityState.STARTED),
    new Activity('A12', 'Re-write tests in Jest', PROJECTS[3], USERS[4],ActivityState.STARTED),
    new Activity('A13', 'Upgrade NodeJS version', PROJECTS[3], USERS[6],ActivityState.FINISHED),
]

const UserRepository = {
    findById: (id: Id): User | undefined => USERS.find(u => u.id === id)
}

const ActivityRepository = {
	findForProject: (project: Project): Activity[] => ACTIVITIES.filter(a => a.projectId === project.id)
}

//

// fasdfsadf

const ProjectRepository = {
    findAll: (): Project[] => [...PROJECTS],
    findById: (id: Id): Project | undefined => PROJECTS.find(p => p.id === id),
    projectsForUser: (userId: Id): Project[] => console.log('userId: ', userId) || PROJECTS.filter(p => p.userId === userId)
}

export {
    Id,

    Project,
    User,
    Activity,

    UserRepository,
    ProjectRepository,
    ActivityRepository
}


