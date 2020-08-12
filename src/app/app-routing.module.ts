import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InformationComponent } from './information/information.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'information', component: InformationComponent},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
