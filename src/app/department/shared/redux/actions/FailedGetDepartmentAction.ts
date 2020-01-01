// Ngrx npm
import { Action } from '@ngrx/store';

export class FailedGetDepartmentAction implements Action {
    public static TYPE = '[DEPARTMENT]FAILED_GET_ACTION';
    readonly type: string = FailedGetDepartmentAction.TYPE;
    constructor(private error: any) { }
}
