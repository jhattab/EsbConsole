import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Job } from './model/job';
import { Instance } from './model/instance';
import { JobService } from "./job.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  private selectedEnvironnement: string = '669de020-480d-4415-84db-3dd974e6b77b';
  private batchToStart: Job;
  private _jobs: Job[] = [];
  private _instances: Instance[] = [];
  private starting: boolean = false;

  @ViewChild('startPopup')
  template: TemplateRef<any>;

  constructor(private jobService: JobService, private modalService: NgbModal) { }


  ngOnInit() {
    this.loadDefinitions();
    this.loadInstances();
  }

  private loadInstances() {
    this.jobService.getInstance().subscribe(m => this._instances = m);
  }

  private loadDefinitions() {
    this.jobService.getdefinition().subscribe(m => this._jobs = m);
  }

  public get jobs(): Job[] {
    return this._jobs;
  }

  get instances(): Instance[] {
    return this._instances;
  }

  public openStartDialog(job: Job) {
    this.batchToStart = job;
    this.modalService.open(this.template);
  }

  public startBatch() {
    this.starting = true;
    this.jobService.startJob(this.batchToStart.name, this.selectedEnvironnement)
      .subscribe(() => {this.starting = false});
  }

  public cleanupAll() {
    this.jobService.cleanupAll().subscribe();
  }
}
