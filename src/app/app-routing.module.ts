import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/ubicaciones/ubicaciones.module').then(m => m.UbicacionesModule)
  },
  {
    path: 'ubicacion/:id',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./modules/formulario/formulario.module').then( m => m.FormularioModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
