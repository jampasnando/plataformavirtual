import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ConsultaTramitesPage } from './consulta-tramites.page';
// import { ModalPageComponent } from './modal/modal-page';
import { Modaltr1Page} from './modaltr1/modaltr1.page';
// import { TramiteService } from '../service/tramite.service';
import { Tramite1Service } from '../service/tramite1.service';
import { Tramite2Service } from '../service/tramite2.service';
import { Modaltr2Page } from './modaltr2/modaltr2.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaTramitesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ConsultaTramitesPage,Modaltr1Page,Modaltr2Page],
  entryComponents:[Modaltr1Page,Modaltr2Page],
  providers:[Tramite1Service,Tramite2Service]
})
export class ConsultaTramitesPageModule {}
