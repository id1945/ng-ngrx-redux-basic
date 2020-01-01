import {
    SuccessGetDepartmentAction,
    FailedGetDepartmentAction,
    ClearGetDepartmentAction,
} from '../actions';
import { Department } from "../../models/Department";

export function getDepartmentReducer(state: any = {
    data: [],
    getErrors: null,
}, action) {
    switch (action.type) {
        case SuccessGetDepartmentAction.TYPE:
            if (action.payload.data) {
                state.data = action.payload.data.map(obj => new Department(obj));
            }
            return state;
        case FailedGetDepartmentAction.TYPE:
            state.getErrors = action.error.error;
            return state;
        case ClearGetDepartmentAction.TYPE:
            state.data = [];
            state.getErrors = null;
            return state;
        default: {
            return state;
        }
    }
}
