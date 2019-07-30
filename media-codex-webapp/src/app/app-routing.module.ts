import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MediasListComponent } from './components/medias-list/medias-list.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'medias-list',
    component:MediasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
