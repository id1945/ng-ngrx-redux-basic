// Angular
import {
  OnInit,
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Subscription } from "rxjs";
import { PlatformLocation } from '@angular/common';

// Ngrx npm
import { Store } from '@ngrx/store';

// Custom
import { AppState } from "../shared/models/AppState";
import { Department } from "../shared/models/Department";
import {
  GetDepartmentAction,
  ClearGetDepartmentAction
} from "../shared/redux/actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  // Declares
  @ViewChild('deprtBox') deprtBox;
  @ViewChild('closeDelete') closeDelete: ElementRef;
  private subscriptions: Subscription[] = [];
  public departments: Department[];
  public loadingIndicator = false;
  public department: Department;
  public model: any;

  // Refer
  //https://medium.com/@RupaniChirag/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b

  constructor(
    private store: Store<AppState>,
    location: PlatformLocation,
  ) {
    location.onPopState(() => {
      this.closeDelete.nativeElement.click();
    });
    this.model = {
      mode: '',
      code: '',
      name: '',
      abbName: '',
      departmentId: '',
      sort: {
        key: 'dept_external_code',
        direction: 'asc'
      },
      update_time: ''
    };
    this.subscriptions.push(store.select(state => state['departmentList'].data).subscribe((data) => {
      // Data response
      if (data.length === 0 && data.status === 'success') {
        alert('Success');
      } else if (data.length > 0) {
        this.loadingIndicator = false;
        this.departments = data;
      }
    }));
    this.subscriptions.push(store.select(state => state['departmentList'].getErrors).subscribe((status) => {
      // Data response
      if (status && status.data && this.loadingIndicator) {
        alert('Success');
      }
    }));
  }

  ngOnInit(): void {
    this.search();
  }

  public onChangeSorting(key) {
    if (this.model.sort.key === key) {
      this.model.sort.direction = this.model.sort.direction === 'desc' ? 'asc' : 'desc';
    } else {
      this.model.sort = {
        key: key,
        direction: 'desc'
      };
    }
    this.search();
    return false;
  }

  public search() {
    this.loadingIndicator = true;
    if (this.checkValidKeySort()) {
      this.departments = [];
      return this.store.dispatch(new GetDepartmentAction(this.model)); // Call api
    } else {
      this.loadingIndicator = false;
    }
  }

  public checkValidKeySort() {
    return (this.model.sort.key === 'dept_id' || this.model.sort.key === 'dept_external_code'
      || this.model.sort.key === 'dept_name' || this.model.sort.key === 'dept_name_abbreviation')
      && (this.model.sort.direction === 'desc' || this.model.sort.direction === 'asc');
  }

  public onDelete(e) {
    alert('Delete');
  }

  public onEdit(e) {
    alert('Delete');
  }

  public onCreate(e) {
    alert('Create');
  }
  
  ngOnDestroy(): void {
    this.loadingIndicator = false;
    this.store.dispatch(new ClearGetDepartmentAction());
    this.subscriptions.forEach((subscriptsion) => subscriptsion.unsubscribe());
  }
}
