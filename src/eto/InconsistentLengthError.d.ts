declare class InconsistentLengthError extends Error {
	message: string;
	constructor(message: string);
}

export default InconsistentLengthError;
