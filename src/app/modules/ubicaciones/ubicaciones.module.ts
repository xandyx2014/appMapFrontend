import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionesRoutingModule } from './ubicaciones-routing.module';
import { UbicacionesComponent } from './ubicaciones.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [UbicacionesComponent],
  imports: [
    MaterialModule,
    CommonModule,
    UbicacionesRoutingModule
  ]
})
export class UbicacionesModule { }
