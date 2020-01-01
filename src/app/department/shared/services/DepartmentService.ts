import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient) { }

    getDepartmentListSort(params: any): Observable<any> {
        let httpParams = new HttpParams();
        if (params.sort && params.sort.key && params.sort.direction) {
            httpParams = httpParams.set('sort', params.sort.key + ':' + params.sort.direction);
        }
        return this.http.get(environment.API_ENDPOINT + 'departments/key_sort', { params: httpParams });
    }
}
