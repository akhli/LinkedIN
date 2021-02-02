import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { PythonComponent } from '../app/python/python.component';
const routes: Routes = [
  {path : '',component:HomeComponent },
  {path : 'home',component:HomeComponent},
  {path : 'python',component: PythonComponent},
  {path : '**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
