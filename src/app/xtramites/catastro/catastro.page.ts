import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catastro',
  templateUrl: './catastro.page.html',
  styleUrls: ['./catastro.page.scss'],
})
export class CatastroPage implements OnInit {
  catastro:Listamenu[]=[
    {
      "nro":"01",
      "texto":"Registro catastral.",
      "link":"/requerimientos"
    },
    {
      "nro":"02",
      "texto":"Registro de adecuación a propiedad horizontal.",
      "link":"/requerimientos"
    },{
      "nro":"03",
      "texto":"Certificación catastral (Solicitud verbal).",
      "link":"/requerimientos"
    },{
      "nro":"04",
      "texto":"Certificación catastral por orden judicial (usucapión).",
      "link":"/requerimientos"
    },{
      "nro":"05",
      "texto":"Certificación datos técnicos ley 247 y su modificatoria 803.",
      "link":"/requerimientos"
    },{
      "nro":"06",
      "texto":"Legalización de planos y resoluciones.",
      "link":"/requerimientos"
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