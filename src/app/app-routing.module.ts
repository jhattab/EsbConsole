import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AuditComponent } from './audit/audit.component';

import { JmsSyntheseComponent } from './jms-synthese/jms-synthese.component';

import { AdminComponent } from './admin/admin.component';
import { BatchComponent } from './admin/batch/batch.component';
import { IndexComponent } from './admin/index/index.component';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children : [
      {path: '', component: DashboardComponent},
      { path: '404', component: NotFoundComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'audit', component: AuditComponent },
      { path: 'jms', component: JmsSyntheseComponent },
      { path: 'admin', children: [
        { path:'', component: AdminComponent },
        { path:'batch', component: BatchComponent },
        { path:'index', component: IndexComponent }
      ]},
      { path: '**', redirectTo: '/404', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
