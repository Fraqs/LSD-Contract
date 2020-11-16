// export { default as InconsistentLengthErrorClass } from './InconsistentLengthError';
// export { default as InvalidInputError } from './InvalidInputError';
// export { default as NotFoundError } from './NotFoundError';

import InconsistentLengthErrorClass from './InconsistentLengthError';
import InvalidInputErrorClass from './InvalidInputError';
import NotFoundErrorClass from './NotFoundError';

export class InconsistentLengthError extends InconsistentLengthErrorClass {
	constructor(msg: string) {
		super(msg);
	}
}

export class InvalidInputError extends InvalidInputErrorClass {
	constructor(msg: string) {
		super(msg);
	}
}

export class NotFoundError extends NotFoundErrorClass {
	constructor(msg: string) {
		super(msg);
	}
}
