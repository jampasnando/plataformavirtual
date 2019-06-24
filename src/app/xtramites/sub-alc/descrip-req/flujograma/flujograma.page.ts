import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flujograma',
  templateUrl: './flujograma.page.html',
  styleUrls: ['./flujograma.page.scss'],
})
export class FlujogramaPage implements OnInit {
  flujo:any;
  imagen:string;
  texto:string;
  // sliderOpts={
  //   zoom:{
  //     maxRatio:5
  //   }
  // }
  constructor(private activateRoute:ActivatedRoute) { }
  ngOnInit() {
    this.flujo=+this.activateRoute.snapshot.paramMap.get('flujo')+1;
    console.log("valor recibido: ",this.flujo);
    this.imagen='assets/imgs/flujo' + this.flujo + '.svg';
    this.texto=this.activateRoute.snapshot.paramMap.get('texto');
  }

}
