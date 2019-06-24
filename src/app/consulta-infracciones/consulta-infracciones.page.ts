import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InfraccionvehiculosService } from '../service/infraccionvehiculos.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalptaPage } from './modalpta/modalpta.page';

@Component({
  selector: 'app-consulta-infraccioens',
  templateUrl: './consulta-infracciones.page.html',
  styleUrls: ['./consulta-infracciones.page.scss'],
})
export class ConsultaInfraccionesPage implements OnInit {
  consultaPTA:FormGroup;
  constructor(public formPTA:FormBuilder,private infraccionVehiculos:InfraccionvehiculosService,public modalControllerpta:ModalController,public alertCrl:AlertController) { 
    this.consultaPTA=formPTA.group({
      pta:new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])),
    });
  }

  ngOnInit() {
  }
  async recibemultapta(data:any){
    const modalpta=await this.modalControllerpta.create({
      component:ModalptaPage,
      componentProps:{data:data,father:this},
      
    });
    return await modalpta.present();    
  
  }
  async muestraAlerta(){
    const alerta=await this.alertCrl.create({
      header:"DEBE INTRODUCIR SU PLACA PTA",
      subHeader:"Ejemplo 6789ABC",
      message:"Vuelva a intentarlo",
      buttons:[{
        text:"Aceptar",
        role:"Cancel",
        cssClass:"cssalerta",
        handler:(blah)=>{

        }
      }]
    });
    await alerta.present();
  }
  closeModalpta(){
    this.modalControllerpta.dismiss();
  }
  getPTA(){
    var pta=this.consultaPTA.value.pta;
    if(pta!="" && pta!=null){
      console.log("enviando pta: ",pta );
      this.infraccionVehiculos.getInfraccion(pta).subscribe((data:any)=>{
        console.log("desde multasjson: ",data);
        this.recibemultapta(data);
      });
    }
    else
      this.muestraAlerta();
    // console.log(pta);
    
  }
}
