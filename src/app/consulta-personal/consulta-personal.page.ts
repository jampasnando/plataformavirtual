import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../service/personal.service';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { ModalPage} from './modal/modal.page';
@Component({
  selector: 'app-consulta-personal',
  templateUrl: './consulta-personal.page.html',
  styleUrls: ['./consulta-personal.page.scss'],
})
export class ConsultaPersonalPage implements OnInit {
  public resultado:any;
  public vector:any[];
  textoBuscar='';

  constructor(private personalService:PersonalService,public modalCrl:ModalController) { }

  ngOnInit() {
    console.log("entró a personal");
    this.obtienelistapersonal();
  }
    
  obtienelistapersonal(){
    var x='';
    this.vector=[];
    this.personalService.obtieneLista(x).subscribe((data:any)=>{
      console.log("listado: ",data.data);
      this.resultado=data.data;
      for(let unreg of this.resultado){
        if(unreg.cargo.substring(0,9)=='SECRETARI' || unreg.cargo.substring(0,7)=='DIRECTO'){
          this.vector.push(unreg);
        }
      }
      console.log("arreglo: ",this.vector);
      // for (let unreg  of data.data){
      //   console.log("un reg:",unreg);
      // }
      // console.log("ruben?",data.data[57].nombre);
    });
  }
  buscar(event){
    this.textoBuscar=event.detail.value;
  }
  detalle(elegido){
    console.log(elegido);
    this.muestraUnpersonal(elegido);
  }
  async muestraUnpersonal(elegido:any){
    const modalPersonal=await this.modalCrl.create({
      component:ModalPage,
      componentProps:{data:elegido,father:this}
    });
    return await modalPersonal.present();
  }
  cerrarModalUnPersonal(){
    this.modalCrl.dismiss();
  }
}
