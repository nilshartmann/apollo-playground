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
    new User('U3', 'klaus', 'Klaus', 'info@klaus.de')
];

const PROJECTS = [
    new Project('P1', 'GQLTALK', 'Create GraphQL Talk', 'Create GraphQL Talk blablabla', USERS[0]),
    new Project('P2', 'TTBCN', 'Book Trip to Barcelona', 'Organize and book a nice 4-day trip to Barcelona in April', USERS[1]),
    new Project('P3', 'CHOUSE', 'Clean the House', 'Its spring time! Time to clean up every room', USERS[2])
];

const UserRepository = {
    findById: (id: Id): User | undefined => USERS.find(u => u.id === id)
}

const ProjectRepository = {
    findById: (id: Id): Project | undefined => PROJECTS.find(p => p.id === id)

}

export {
    User,
    UserRepository,
    ProjectRepository
}


