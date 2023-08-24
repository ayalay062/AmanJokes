import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesGalleryComponent } from './components/jokes-gallery/jokes-gallery.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: JokesGalleryComponent, pathMatch: 'full'
  },
  {
    path: 'jokes',
    canActivate: [AuthGuard],
    component: JokesGalleryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
