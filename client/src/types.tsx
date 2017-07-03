// as in user

export type User = {
	name: string,
	id: string,
	projects: {
		totalCount: number,
	},
	activities: {
		totalCount: number,
	}
};

export type OnUserSelectedCallback = (user: User) => void;


