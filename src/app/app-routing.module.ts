import { DataresolveResolver } from './dataresolve.resolver';
import { NewColorComponent } from './new-color/new-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NewColorComponent ,resolve: [DataresolveResolver]},
];
/** /vehicle/brand -> /colors/new */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
