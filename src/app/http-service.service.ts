import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  runIamExpiredQuery(): Observable<String[]> {
    return this.http.get('api/iamexpired')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res || {};
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
