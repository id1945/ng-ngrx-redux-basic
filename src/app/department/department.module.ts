import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { DepartmentRoutingModule } from './department-routing.module';
import { ListComponent } from './list/list.component';
import {
  StoreModule
} from '@ngrx/store';
import {
  EffectsModule
} from '@ngrx/effects';
import { DepartmentEffects } from "../department/shared/redux/effects";
import { getDepartmentReducer } from "../department/shared/redux/reducers";
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from "src/app/department/shared/services/DepartmentService";

const routes: Routes = [
  {
      path: '',
      component: ListComponent,
  }
]

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([]), // fix issue NullInjectorError: No provider for Actions!
    StoreModule.forRoot({}), // fix issue NullInjectorError: No provider for Store!
    EffectsModule.forFeature([DepartmentEffects]),
    StoreModule.forFeature('departmentList', getDepartmentReducer),
    RouterModule.forChild(routes)
  ],
  providers: [DepartmentService]
})
export class DepartmentModule { }
