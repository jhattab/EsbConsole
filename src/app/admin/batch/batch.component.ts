import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Job } from './model/job';
import { Instance } from './model/instance';
import { JobService } from "./job.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit, OnDestroy {

  private selectedEnvironnement: string = '669de020-480d-4415-84db-3dd974e6b77b';
  private batchToStart: Job;
  private _jobs: Job[] = [];
  private _instances: Instance[] = [];
  private starting: boolean = false;

  private subscription: Subscription = null;

  @ViewChild('startPopup')
  template: TemplateRef<any>;

  constructor(private jobService: JobService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadDefinitions();
    this.loadInstances();
  }

  ngOnDestroy() {
    this.disableRefresh();
  }

  private enableRefresh() {
    this.disableRefresh();
    let timer = Observable.timer(2000, 10000);
    this.subscription = timer.subscribe(() => this.loadInstances());
  }

  private disableRefresh() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  refresh(event: boolean) {
    if (event) {
      this.enableRefresh();
    }
    else {
      this.disableRefresh();
    }
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
      .subscribe(() => { this.starting = false });
  }

  public cleanupAll() {
    this.jobService.cleanupAll().subscribe(() => this.loadInstances());
  }

  public resumeBatch(exId: number) {
    this.jobService.resumeBatch(exId).subscribe(() => this.loadInstances());
  }

  public abortBatch(exId: number) {
    this.jobService.abortBatch(exId).subscribe(() => this.loadInstances());
  }

  public deleteInstance(exId: number) {
    this.jobService.deleteInstance(exId).subscribe(() => this.loadInstances());
  }

  public isAbortable(node: Instance) {
    return node.status == 'STARTED' || node.status == 'STARTING';
  }

  public isAbandonnable(node: Instance) {
    return node.status == 'STOPPING' || node.status == 'STOPPED' || node.status == 'FAILED' || node.status == 'ABANDONED' || node.status == 'UNKNOWN';
  }

  public isResumable(node: Instance) {
    return node.status == 'FAILED' || node.status == 'STOPPED';
  }

  public isDeletable(node: Instance) {
    return node.status == 'ABANDONED' || node.status == 'FAILED' || node.status == 'STOPPED' || node.status == 'COMPLETED' || node.status == 'UNKNOWN';
  }
}
