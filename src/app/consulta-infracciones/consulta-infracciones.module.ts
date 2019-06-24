import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaInfraccionesPage } from './consulta-infracciones.page';
import { InfraccionvehiculosService } from '../service/infraccionvehiculos.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalptaPage } from './modalpta/modalpta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaInfraccionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ConsultaInfraccionesPage,ModalptaPage],
  entryComponents:[ModalptaPage],
  providers:[InfraccionvehiculosService]
})
export class ConsultaInfraccionesPageModule {}
