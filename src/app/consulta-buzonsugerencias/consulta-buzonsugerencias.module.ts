import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaBuzonsugerenciasPage } from './consulta-buzonsugerencias.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaBuzonsugerenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaBuzonsugerenciasPage]
})
export class ConsultaBuzonsugerenciasPageModule {}
