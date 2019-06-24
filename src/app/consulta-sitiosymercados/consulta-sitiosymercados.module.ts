import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ConsultaSitiosymercadosPage } from './consulta-sitiosymercados.page';
import { ModalPageComponent } from './modal/modal.page';
import { SitiosService } from '../service/sitios.service';
const routes: Routes = [
  {
    path: '',
    component: ConsultaSitiosymercadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ConsultaSitiosymercadosPage,ModalPageComponent], 
  entryComponents:[ModalPageComponent],
  providers:[SitiosService]
})
export class ConsultaSitiosymercadosPageModule {}

