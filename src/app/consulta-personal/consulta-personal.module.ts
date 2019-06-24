import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaPersonalPage } from './consulta-personal.page';
import { PersonalService } from '../service/personal.service';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';
import { ModalPage } from './modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPersonalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PipesModule
  ],
  declarations: [ConsultaPersonalPage,ModalPage],
  entryComponents:[ModalPage],
  providers:[PersonalService]
})
export class ConsultaPersonalPageModule {}
