import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-alc',
  templateUrl: './sub-alc.page.html',
  styleUrls: ['./sub-alc.page.scss'],
})
export class SubAlcPage implements OnInit {
  subalc:Listamenu[]=[
    // {
    //   "nro":"01",
    //   "texto":"Ubicación sub alcaldías.",
    //   "link":"/descrip-req"
    // },
    {
      "nro":"02",
      "texto":"Visado anteproyectode urbanización.",
      "link":"/descrip-req"
    },{
      "nro":"03",
      "texto":"Aprobación de plano de regularización de lote.",
      "link":"/descrip-req"
    },{
      "nro":"04",
      "texto":"Aprobación de plano de urbanización.",
      "link":"/descrip-req"
    },{
      "nro":"05",
      "texto":"Aprobación de plano de anexión de lote.",
      "link":"/descrip-req"
    },{
      "nro":"06",
      "texto":"Visado anteproyecto de sub-división de lote.",
      "link":"/descrip-req"
    },{
      "nro":"07",
      "texto":"Certificación de plano de lote.",
      "link":"/descrip-req"
    },{
      "nro":"08",
      "texto":"Resoluciones complementarias.",
      "link":"/descrip-req"
    },{
      "nro":"09",
      "texto":"Certificaciones varios.",
      "link":"/descrip-req"
    },{
      "nro":"10",
      "texto":"Certificaciones de uso de suelo.",
      "link":"/descrip-req"
    },{
      "nro":"11",
      "texto":"Fijación de línea y nivel.",
      "link":"/descrip-req"
    },{
      "nro":"12",
      "texto":"Fijación de rasante, verificación de medidas y superficie de lote.",
      "link":"/descrip-req"
    },{
      "nro":"13",
      "texto":"Visado de anteproyecto de construcción de edificio o vivienda multifamiliar.",
      "link":"/descrip-req"
    },{
      "nro":"14",
      "texto":"Aprobación de plano de construcción de vivienda unifamiliar o multifamiliar.",
      "link":"/descrip-req"
    },{
      "nro":"15",
      "texto":"Aprobación de plano de remodelación y ampliación de vivienda.",
      "link":"/descrip-req"
    },{
      "nro":"16",
      "texto":"Aprobación de plano de construcción de edificio.",
      "link":"/descrip-req"
    },{
      "nro":"17",
      "texto":"Aprobación de plano de remodelación, ampliación, regularización y/o sustitución de edificio.",
      "link":"/descrip-req"
    },{
      "nro":"18",
      "texto":"Aprobación de planos de verja.",
      "link":"/descrip-req"
    },{
      "nro":"19",
      "texto":"Autorización de trabajos menores.",
      "link":"/descrip-req"
    },{
      "nro":"20",
      "texto":"Visado de anteproyecto de equipamientos públicos y privados.",
      "link":"/descrip-req"
    },{
      "nro":"21",
      "texto":"Visado de estación de servicio y surtidores plano de anteproyecto.",
      "link":"/descrip-req"
    },{
      "nro":"22",
      "texto":"Aprobación de plano de equipamiento públicos y privados.",
      "link":"/descrip-req"
    },{
      "nro":"23",
      "texto":"Aprobación de plano de estación y servicio surtidores.",
      "link":"/descrip-req"
    },{
      "nro":"24",
      "texto":"Autorización eventual para uso de espacios públicos para actividades cívicas, religiosas, culturales y otros.",
      "link":"/descrip-req"
    },{
      "nro":"25",
      "texto":"Visación técnica y visación legal de minutas.",
      "link":"/descrip-req"
    },{
      "nro":"26",
      "texto":"Sello seco en testimonios y/o minutas con reconocimiento de firmas para su registro en derechos reales.",
      "link":"/descrip-req"
    },{
      "nro":"27",
      "texto":"Atención de denuncias sobre problemas técnicos y legales de construcción.",
      "link":"/descrip-req"
    },{
      "nro":"28",
      "texto":"Avalúo de inmuebles con orden judicial y/o petición de parte.",
      "link":"/descrip-req"
    },{
      "nro":"29",
      "texto":"Legalización de copia de documentos de derecho propietario (Testimonios, minutas y otros), resoluciones, informes, licencias de funcionamiento y otros para uso exclusivo del G.A.M.C.",
      "link":"/descrip-req"
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
}