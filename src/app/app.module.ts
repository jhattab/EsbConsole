import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { BatchComponent } from './admin/batch/batch.component';
import { AuditComponent } from './audit/audit.component';
import { JmsSyntheseComponent } from './jms-synthese/jms-synthese.component';

import { JobService } from './admin/batch/job.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpServiceService } from "./http-service.service";
import { IndexComponent } from './admin/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    BatchComponent,
    AuditComponent,
    JmsSyntheseComponent,
    NotFoundComponent,
    IndexComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgHttpLoaderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpServiceService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
