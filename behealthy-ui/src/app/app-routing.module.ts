import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataScrubComponent} from './pages/data-scrub/data-scrub.component';
import {RulesCreationComponent} from './pages/rules-creation/rules-creation.component';

const routes: Routes = [
  {
    path: '',
    component: DataScrubComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-rules',
    component: RulesCreationComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
