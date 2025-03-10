import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { ServicesComponent } from './demo/catalogo-servicos/catalogo-servicos.component';
import { AuthGuard } from './guards/auth.guard'; // Importar o guard
import { UserProfileComponent } from './demo/user-profile/user-profile.component'; // Importar o componente de perfil do usuário

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent),
        canActivate: [AuthGuard] // Adicionar o guard 
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'catalogo/:category',
        component: ServicesComponent
      },
      {
        path: 'mapa',
        loadComponent: () => import('./demo/mapa/mapa.component').then((c) => c.MapaComponent)
      },
      {
        path: 'contrato/:userId',
        loadComponent: () => import('./demo/comprar-servico/comprar-servico.component').then((c) => c.ComprarServicosComponent)
      },
      {
        path: 'perfil',
        component: UserProfileComponent, // Adicionar a rota para o perfil do usuário
        canActivate: [AuthGuard] // Adicionar o guard
      },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
