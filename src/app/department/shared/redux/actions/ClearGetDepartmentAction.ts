// Ngrx npm
import { Action } from '@ngrx/store';

export class ClearGetDepartmentAction implements Action {
    public static TYPE = '[DEPARTMENT]CLEAR_GET_ACTION';
    readonly type: string = ClearGetDepartmentAction.TYPE;
    constructor() { }
}
