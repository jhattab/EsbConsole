import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { BatchComponent } from './admin/batch/batch.component';
import { AuditComponent } from './audit/audit.component';
import { JmsSyntheseComponent } from './jms-synthese/jms-synthese.component';

import { JobService } from './admin/batch/job.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    BatchComponent,
    AuditComponent,
    JmsSyntheseComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
