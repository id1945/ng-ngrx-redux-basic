import { Action } from '@ngrx/store';

export class SuccessGetDepartmentAction implements Action {
    public static TYPE = '[DEPARTMENT]SUCCESS_GET_ACTION';
    readonly type = SuccessGetDepartmentAction.TYPE;
    constructor(public payload: any) { }
}
