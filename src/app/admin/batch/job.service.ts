import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from "./model/job";
import { Instance } from "./model/instance";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class JobService {

  baseApi = '/outils/esb-console/admin/batch';

  constructor(private http: HttpClient) {
  }

  getdefinition(): Observable<Job[]> {
    return this.http
      .get(this.baseApi + '/definitions')
      .catch(this.fail);
  }

  getInstance(): Observable<Instance[]> {
    return this.http
      .get(this.baseApi + '/instances')
      .catch(this.fail);
  }

  cleanupAll() {
    return this.http
      .post(this.baseApi + '/cleanupAll', null)
      .catch(this.fail);
  }

  startJob(batchToStart: string, envId: string):Observable<any> {
    let jobParam = [
      { name: 'envId', value: envId, type: 'String' },
      { name: 'envName', value: 'Intégration', type: 'String' }
    ];
    return this.http
      .post(this.baseApi + '/start?name=' + batchToStart, jobParam)
      .catch(this.fail);
  }

  private fail(err: any): Observable<any> {
    console.log(err);
    return Observable.throw(err);
  }


}
