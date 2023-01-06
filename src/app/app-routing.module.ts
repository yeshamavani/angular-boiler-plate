import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '@boiler/env/environment';
import {LoggedInGuard} from './core/auth/guards';
import {EnvResolverService} from './core/services';

const routes: Routes = [
  {
    path: 'auth',
    resolve: {
      env: EnvResolverService,
    },
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: '',
    redirectTo: environment.homePath,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: environment.homePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
