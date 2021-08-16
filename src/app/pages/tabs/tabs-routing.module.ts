import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'mis-productos',
        loadChildren: () => import('./mis-productos/mis-productos.module').then(m => m.MisProductosPageModule)
      },
      {
        path: 'transacciones',
        loadChildren: () => import('./transacciones/transacciones.module').then( m => m.TransaccionesPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/mis-productos',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
