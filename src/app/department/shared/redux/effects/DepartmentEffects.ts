// Angular
import {
    Injectable
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

// Ngrx npm
import { Effect, createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

// My app
import {
    SuccessGetDepartmentAction,
    FailedGetDepartmentAction,
    GetDepartmentAction,
} from '../actions';
import { DepartmentService } from "../../services/DepartmentService";


@Injectable()
export class DepartmentEffects {

    constructor(private actions$: Actions, private departmentService: DepartmentService) { }

    @Effect() getDepartments$: Observable<Action> = this.actions$.pipe(
        ofType<GetDepartmentAction>(GetDepartmentAction.TYPE),
        mergeMap(action =>
            this.departmentService.getDepartmentListSort(action.payload).pipe(
                map(data => new SuccessGetDepartmentAction(data)),
                catchError((e) => of(new FailedGetDepartmentAction(e)))
            )
        )
    )

}
