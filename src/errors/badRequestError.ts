import FieldError from '../types/fieldError';

export default class BadRequestError extends Error {
    
    public messages: Array<FieldError> = [];

    constructor (m: string) {
        super(m);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    public addFieldError({ fieldName, errorDetail }: { fieldName: string; errorDetail: string; }) {
        const newFieldError = new FieldError(fieldName, errorDetail);
        this.messages.push(newFieldError);
    }
}