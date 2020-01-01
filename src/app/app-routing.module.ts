import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "src/app/department/list/list.component";
import { AppComponent } from "src/app/app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'department',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
          {
            path: 'department',
            loadChildren: './department/department.module#DepartmentModule'
          },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
