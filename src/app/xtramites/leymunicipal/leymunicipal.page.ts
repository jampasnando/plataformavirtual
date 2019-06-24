import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leymunicipal',
  templateUrl: './leymunicipal.page.html',
  styleUrls: ['./leymunicipal.page.scss'],
})
export class LeymunicipalPage implements OnInit {
  subalc:Listamenu[]=[
    {
      "nro":"01",
      "texto":"Regularización plano de lote sin aprobación previa.",
      "link":"/requisitos",
      "costo":"Bs. 1,00/m2"
    },
    {
      "nro":"02",
      "texto":"Regularización plano de lote con aprobación previa.",
      "link":"/requisitos",
      "costo":"Bs. 1,00/m2"
    },{
      "nro":"03",
      "texto":"Regularización plano anexión de lote.",
      "link":"/requisitos",
      "costo":"Bs. 1,00/m2"
    },{
      "nro":"04",
      "texto":"Regularización plano sub- división de lote.",
      "link":"/requisitos",
      "costo":"Bs. 1,00/m2"
    },{
      "nro":"05",
      "texto":"Regularización grupal.",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"06",
      "texto":"Regularización de división de lotes consolidados.",
      "link":"/requisitos",
      "costo":"Bs. 1,00/m2"
    },{
      "nro":"07",
      "texto":"Regularización plano arquitectónico en edificaciones menor o igual a 4 plantas.",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"08",
      "texto":"Regularización plano arquitectónico de remodelación y/o ampliación en edificaciones menor o igual a 4 plantas.",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"09",
      "texto":"Regularización plano arquitectónico en edificaciones mayores a 4 plantas.",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"10",
      "texto":"Regularización plano arquitectónico de remodelación y/o ampliación en edificaciones mayores a 4 plantas.",
      "link":"/requisitos",
      "costo":"0"
    },
    // {
    //   "nro":"11",
    //   "texto":"Fijación de línea y nivel.",
    //   "link":"/requisitos",
    //   "costo":""
    // },
    {
      "nro":"11",
      "texto":"Regularización plano arquitectónico de ampliación y/o remodelación de edificaciones constituidas bajo el régimen de propiedad horizontal. (para propiedades de unidades privadas).",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"12",
      "texto":"Regularización plano arquitectónico de ampliación y/o remodelación de edificaciones constituidas bajo el régimen de propiedad horizontal. (para co-propietarios).",
      "link":"/requisitos",
      "costo":"0"
    },{
      "nro":"13",
      "texto":"Regularización de plano arquitectónico de remodelación de unidades privadas constituidas bajo el régimen de propiedad horizontal (departamentos, oficinas, almacenes, depósitos, consultorios, bauleras, terrazas, etc).",
      "link":"/requisitos",
      "costo":"0"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Listamenu{
  nro:string;
  texto:string;
  link:string;
  costo:string;
}