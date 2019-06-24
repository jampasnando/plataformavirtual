import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'consulta-tramites', loadChildren: './consulta-tramites/consulta-tramites.module#ConsultaTramitesPageModule' },
  { path: 'consulta-sitiosymercados', loadChildren: './consulta-sitiosymercados/consulta-sitiosymercados.module#ConsultaSitiosymercadosPageModule' },
  { path: 'consulta-infracciones', loadChildren: './consulta-infracciones/consulta-infracciones.module#ConsultaInfraccionesPageModule' },
  { path: 'consulta-buzonsugerencias', loadChildren: './consulta-buzonsugerencias/consulta-buzonsugerencias.module#ConsultaBuzonsugerenciasPageModule' },
  { path: 'menu-deudas', loadChildren: './menu-deudas/menu-deudas.module#MenuDeudasPageModule' },
  { path: 'consulta-personal', loadChildren: './consulta-personal/consulta-personal.module#ConsultaPersonalPageModule' },
  { path: 'xmenu', loadChildren: './xtramites/menu/menu.module#MenuPageModule' },
  { path: 'sub-alc', loadChildren: './xtramites/sub-alc/sub-alc.module#SubAlcPageModule' },
  { path: 'descrip-req/:id/:texto', loadChildren: './xtramites/sub-alc/descrip-req/descrip-req.module#DescripReqPageModule' },
  { path: 'catastro', loadChildren: './xtramites/catastro/catastro.module#CatastroPageModule' },
  { path: 'requerimientos/:id/:texto', loadChildren: './xtramites/catastro/requerimientos/requerimientos.module#RequerimientosPageModule' },
  { path: 'leymunicipal', loadChildren: './xtramites/leymunicipal/leymunicipal.module#LeymunicipalPageModule' },
  { path: 'requisitos/:id/:texto/:costo', loadChildren: './xtramites/leymunicipal/requisitos/requisitos.module#RequisitosPageModule' },
  { path: 'flujograma/:flujo/:texto', loadChildren: './xtramites/sub-alc/descrip-req/flujograma/flujograma.module#FlujogramaPageModule' },
  { path: 'xflujograma/:flujo/:texto', loadChildren: './xtramites/catastro/requerimientos/flujograma/flujograma.module#FlujogramaPageModule' },
  { path: 'ubicaciones', loadChildren: './xtramites/sub-alc/ubicaciones/ubicaciones.module#UbicacionesPageModule' },
  { path: 'mapa/:datos', loadChildren: './xtramites/sub-alc/ubicaciones/mapa/mapa.module#MapaPageModule' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
