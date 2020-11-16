declare class NotFoundError extends Error {
	message: string;
	constructor(message: string);
}

export default NotFoundError;
