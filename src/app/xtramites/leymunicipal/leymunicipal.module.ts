import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeymunicipalPage } from './leymunicipal.page';

const routes: Routes = [
  {
    path: '',
    component: LeymunicipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeymunicipalPage]
})
export class LeymunicipalPageModule {}
