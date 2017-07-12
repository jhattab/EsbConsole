import { Component, OnInit } from '@angular/core';
import { Jobs } from './model/jobs';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  constructor() { }

  private _jobs: Jobs[] = [];

  ngOnInit() {
  }

  public get jobs(): Jobs[] {
    return this._jobs;
  }

}
