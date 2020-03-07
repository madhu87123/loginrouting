import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: MainpageComponent  },
  { path: 'mainpage', component: MainpageComponent },

  { path: 'dashboard', component: DashboardComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponents = [
            MainpageComponent,
            DashboardComponent
  ]