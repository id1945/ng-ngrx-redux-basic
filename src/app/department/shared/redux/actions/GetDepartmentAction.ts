import { Action } from '@ngrx/store';

export class GetDepartmentAction implements Action {
    public static TYPE = '[DEPARTMENT]GET_ACTION';
    readonly type = GetDepartmentAction.TYPE;
    constructor(public payload: any) { }
}
