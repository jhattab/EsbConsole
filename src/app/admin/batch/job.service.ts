import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { Jobs } from "./model/jobs";

@Injectable()
export class JobService {

  baseApi = 'http://localhost:43210/outil/outils/esb-console/admin/batch/';

  constructor(private http: Http) {

  }

  getdefinition(): Observable<Jobs[]> {
    return this.http
      .get(this.baseApi + '/definitions')
      .map(this.extractData)
      .catch(this.fail);
  }

  private extractData(res: Response): Jobs[] {
    return res.json();
  }

  private fail(err: Response): Observable<any> {
    console.log(err);
    let details = err.json();
    return Observable.throw(details);
  }
}
