import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../first-with-tabs/first-with-tabs.module').then(m => m.FirstWithTabsPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../second/second.module').then(m => m.SecondPageModule)
      },
      {
        path: 'second/details',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)
      },
      {
        path: 'mis-productos',
        loadChildren: () => import('../tabs/mis-productos/mis-productos.module').then(m => m.MisProductosPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then(m => m.ContactoPageModule)
      },
      {
        path: 'sucursales',
        loadChildren: () => import('../sucursales/sucursales.module').then(m => m.SucursalesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
