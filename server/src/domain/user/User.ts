import { Optional, Id } from '../common';

export class User {
	constructor(public id: Id, public login: string, public name: string, public email: string) {
	}
}

export type UserRepository = {
	createUser: ({ email, login, name }: CreateUserInput) => User;
	updateUser: ({ id, email, name }: UpdateUserInput) => User;
	getById: (id: Id) => User;
	findById: (id: Id) => Optional<User>
}

export type CreateUserInput = {
	login: string,
	name: string,
	email: string
}

export type CreateUserPayload = {
	newUser: User
}

export type UpdateUserInput = {
	id: Id,
	name: string,
	email: string
}

export type UpdateUserPayload = {
	updatedUser: User
}
