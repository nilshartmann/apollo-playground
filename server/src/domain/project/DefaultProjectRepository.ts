import { Optional, Id, newId } from '../common';
import { UserRepository } from '../user/User';
import { Project, ProjectRepository, CreateProjectInput, UpdateProjectInput } from './Project';

export const createDefaultProjectRepository = (userRepository: UserRepository, initialProjects: Project[]): ProjectRepository => {
	const PROJECTS = [...initialProjects];

	const DefaultProjectRepository = {
		createProject: ({ description, ownerId, title }: CreateProjectInput): Project => {
			const owner = userRepository.getById(ownerId);

			const newProject = new Project(newId('P'), title, description, owner);
			PROJECTS.push(newProject);
			return newProject;
		},

		updateProject: ({ id, description, title }: UpdateProjectInput): Project => {
			const project = DefaultProjectRepository.getById(id);

			project.description = description;
			project.title = title;

			return project;
		},

		findAll: (): Project[] => [...PROJECTS],

		getById: (id: Id): Project => {
			const project = PROJECTS.find(p => p.id === id);
			if (!project) {
				throw new Error(`Could not find Project with Id '${id}'`);
			}
			return project;
		},

		findById: (id: Id): Project | undefined => PROJECTS.find(p => p.id === id),

		projectsForUser: (userId: Id): Project[] => console.log('userId: ', userId) || PROJECTS.filter(p => p.userId === userId)
	}

	return DefaultProjectRepository;
}


