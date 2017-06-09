export type Id = string;
export type Optional<T> = T | undefined;

const GENERATORS: { [key: string]: number } = {};

export const newId = (prefix: string): Id => {
	let currentId = GENERATORS[prefix];
	const newId = currentId ? currentId + 1 : 100;

	GENERATORS[prefix] = newId;

	return `${prefix}${newId}`;
}
