import { Optional, Id, newId } from '../common';
import { User, UserRepository, CreateUserInput, UpdateUserInput } from './User';

export const createDefaultUserRepository = (initialUsers: User[]): UserRepository => {

	const USERS: User[] = [...initialUsers];

	const DefaultUserRepository: UserRepository = {

		createUser: ({ email, login, name }: CreateUserInput): User => {
			const newUser = new User(newId('U'), login, name, email);
			USERS.push(newUser);
			return newUser;
		},
		updateUser: ({ id, email, name }: UpdateUserInput): User => {
			const user = DefaultUserRepository.getById(id);

			user.email = email;
			user.name = name;

			return user;
		},

		findAll: (): User[] => [...USERS],

		getById: (id: Id): User => {
			const user = USERS.find(user => user.id === id);
			if (!user) {
				throw new Error(`Could not find User with Id '${id}'`);
			}
			return user;
		},

		findById: (id: Id): Optional<User> => USERS.find(u => u.id === id)
	}

	return DefaultUserRepository;

}
