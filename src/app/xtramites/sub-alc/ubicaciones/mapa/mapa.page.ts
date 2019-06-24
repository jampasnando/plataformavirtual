import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, icon,marker } from 'leaflet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map:Map;
  datos:any;
  
  myIcon = icon({
    iconUrl: 'assets/myicon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'assets/myicon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  subAlcadias:any[]=[
    {title:"SUBALCALDÍA ADELA ZAMUDIO",lat:-17.37918,lon:-66.15292},
    {title:"SUBALCALDÍA ALEJO CALATAYUD",lat:-17.43226,lon:-66.14985},
    {title:"SUBALCADÍA TUNARI",lat:-17.35876,lon:-66.17191},
    {title:"SUBALCALDÍA MOLLE",lat:-17.39693,lon:-66.18489},
    {title:"SUBALCALDÍA ITOCTA",lat:-17.44673,lon:-66.14109},
    {title:"SUBALCALDÍA VALLE HERMOSO",lat:-17.41799,lon:-66.13135}
  ];
  constructor(private activateRoute:ActivatedRoute) {}
  leafletMap() {
    console.log("boton");
    this.map = new Map('mimapa').setView([this.subAlcadias[this.datos].lat,this.subAlcadias[this.datos].lon], 15);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    const markPoint = marker([this.subAlcadias[this.datos].lat,this.subAlcadias[this.datos].lon],{icon:this.myIcon});
    markPoint.bindPopup(this.subAlcadias[this.datos].title);
    this.map.addLayer(markPoint);
  }

  ngOnInit() {
    this.datos=this.activateRoute.snapshot.paramMap.get('datos');
    console.log("recibiendo: ",this.datos);
    console.log(this.subAlcadias[this.datos]);
    setTimeout(function(){
      // this.leafletMap();
      document.getElementById("btnmapa").click(); 
    }, 1500);
  }
  
}
