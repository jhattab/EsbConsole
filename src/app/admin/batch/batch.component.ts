import { Component, OnInit } from '@angular/core';
import { Jobs } from './model/jobs';
import { Http, Response } from '@angular/http';
import { JobService } from "./job.service";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  constructor(private http: Http, private jobService: JobService) { }

  private _jobs: Jobs[] = [];

  ngOnInit() {
    this.loadDefinitions();
  }

  private loadDefinitions() {
    this.jobService.getdefinition().subscribe(m => this._jobs = m);
  }

  public get jobs(): Jobs[] {
    return this._jobs;
  }
}
