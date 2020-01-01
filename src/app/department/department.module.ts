// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Ngrx npm
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// My app
import { DepartmentRoutingModule } from './department-routing.module';
import { ListComponent } from './list/list.component';
import { DepartmentEffects } from "../department/shared/redux/effects";
import { getDepartmentReducer } from "../department/shared/redux/reducers";
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
    HttpClientModule, // Http client
    EffectsModule.forRoot([]), // fix issue NullInjectorError: No provider for Actions!
    StoreModule.forRoot({}), // fix issue NullInjectorError: No provider for Store!
    EffectsModule.forFeature([DepartmentEffects]), // Effect
    StoreModule.forFeature('departmentList', getDepartmentReducer), // Reduce
    RouterModule.forChild(routes)
  ],
  providers: [DepartmentService] // My servive
})
export class DepartmentModule { }
