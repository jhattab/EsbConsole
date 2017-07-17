import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from "./model/jobs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class JobService {

  baseApi = '/outils/esb-console/admin/batch';

  constructor(private http: HttpClient) {
  }

  getdefinition(): Observable<Jobs[]> {
    return this.http
      .get(this.baseApi + '/definitions')
      .catch(this.fail);
  }

  private fail(err: any): Observable<any> {
    console.log(err);
    return Observable.throw(err);
  }
}
