declare class InvalidInputError extends Error {
	message: string;
	constructor(message: string);
}

export default InvalidInputError;
