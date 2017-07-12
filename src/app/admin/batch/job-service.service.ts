import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class JobServiceService {

  baseApi = 'http://api.tvmaze.com/';

  constructor(private http: Http) {

  }

  getBatchConfigurations(page, size) {
    let params: URLSearchParams = new URLSearchParams();
    params.append('page', page);
    params.append('size', size);
    return this.http.get(this.baseApi + '/batch/configurations', params);
  }

  getJobInstances(jobname, page, size) {
    return this.http.get(this.baseApi + '/batch/instances', {
      params: {
        page: page,
        size: size,
        jobname: jobname
      }
    });
  }

  launchJob(jobName, jobParameters) {
    var data = 'jobname=' + jobName + '&jobParameters=' + jobParameters;

    this.http.post(this.baseApi + '/batch/executions', data)
      .map(res => {
        console.log('Job ' + jobName + ' launched.');
      })
      .catch(this.handleErrorObservable);
  }

  getJobExecutions(jobName, page, size) {
    var params = {
      page: page,
      size: size
    };

    if (jobName) {
      params.jobName = jobName;
    }

    return this.http.get(this.baseApi + '/batch/executions', {
      params: params
    });
  }

  getJobExecutionsForInstance(jobName, jobInstanceId) {
    return this.http.get(this.baseApi + '/batch/executions', {
      params: {
        jobname: jobName,
        jobinstanceid: jobInstanceId
      }
    });
  }

  stopAll() {
    return this.http.put(this.baseApi + '/batch/executions', 'stop=true')
      .success(function () {
        growl.success('All jobs have been requested to stop');
      })
      .error(function () {
        growl.error('There was an error requesting the jobs stop');
      });
  }

  getJobExecutionInfo(executionId) {
    return this.http.get(this.baseApi + '/batch/executions/' + executionId);
  }

  getStepExecutionInfo(jobExecutionId, stepExecutionId) {
    return this.http.get(this.baseApi + '/batch/executions/' + jobExecutionId + '/steps/' + stepExecutionId);
  }

  getFiles(page, size) {
    return this.http.get(this.baseApi + '/batch/files', {
      params: {
        page: page,
        size: size
      }
    });
  }

  deleteFiles(path) {
    return this.http.delete(this.baseApi + '/batch/files', {
      params: {
        path: path
      }
    });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
