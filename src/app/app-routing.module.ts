import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AuditComponent } from './audit/audit.component';

import { JmsSyntheseComponent } from './jms-synthese/jms-synthese.component';

import { AdminComponent } from './admin/admin.component';
import { BatchComponent } from './admin/batch/batch.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'jms', component: JmsSyntheseComponent },
  { path: 'admin', children: [
    {path:'', component: BatchComponent },
    {path:'batch', component: BatchComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
