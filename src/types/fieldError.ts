export default class FieldError {

    public fieldName: string;
    public errorDetail: string;

    constructor (fieldName: string, errorDetail: string) {
        this.fieldName = fieldName;
        this.errorDetail = errorDetail;
    }

}