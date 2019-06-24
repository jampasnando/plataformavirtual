import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { SitiosService } from '../service/sitios.service';
import { ModalPageComponent } from "./modal/modal.page";

@Component({
  selector: 'app-consulta-sitiosymercados',
  templateUrl: './consulta-sitiosymercados.page.html',
  styleUrls: ['./consulta-sitiosymercados.page.scss'],
})
export class ConsultaSitiosymercadosPage implements OnInit {
  onRequest:boolean;
	sitiosForm:FormGroup;
	error_messages = {
		'tipositio':[
			{type:'required',message:'Este dato es requerido.'}
			// {type:'minLength',message:'Este dato debe contener cuatro caracteres como minimo.'},
			// {type:'maxLength',message:'Este dato debe contener cuatro caracteres como maximo.' }
		],
		'codLicencia':[
			{type:'required',message:'Este dato es requerido.'}
		]
	};
  constructor(public formBuilder:FormBuilder,private sitiosService:SitiosService,public modalController:ModalController,public alertaCrtl:AlertController) {
    this.sitiosForm = this.formBuilder.group({
      tipositio: new FormControl('',Validators.compose([
        Validators.required
        // Validators.minLength(4),
        // Validators.maxLength(4)  				
        ])),
      codLicencia: new FormControl('',Validators.compose([
        Validators.required
        //Validators.pattern['expresion']
        ]))
    });
  this.onRequest = false;
    
  }

  ngOnInit() {
  }

  async presentModal(data2Modal:any){
      const modal = await this.modalController.create({
        component:ModalPageComponent,
        componentProps:{data:data2Modal,father:this}
    });		
    return await modal.present();		  
  }
  closeModal(){
    this.modalController.dismiss();
    this.onRequest = false;
    this.sitiosForm.reset();
  }
  async presentAlert() {
		const alert = await this.alertaCrtl.create({
		  header: 'FALTAN DATOS',
		  subHeader: 'Todos los campos DEBEN ser LLENADOS',
		  message: 'El Tipo de Consulta y Código de Lincencia SON REQUERIDOS',
		  buttons: [
			  {
				text:'ACEPTAR',
				role:'cancel',
				cssClass:'secondary',
				handler:(blah)=>{
          console.log('btn aceptar');	
				}
			  }
		  ]
		});
	
		await alert.present();
	}
  getDeuda(){
    if(!this.onRequest){
       var tipox=this.sitiosForm.value.tipositio;
       var codigo_licenciax=this.sitiosForm.value.codLicencia;
       console.log("del formu: ",tipox," | ",codigo_licenciax);
      if(tipox=="" || codigo_licenciax=="" || tipox==null || codigo_licenciax==null){
        
        this.presentAlert();
      }
      else{
        this.onRequest = true;
        const data2Send = {
        tipo : this.sitiosForm.value.tipositio,
        codigo_licencia : this.sitiosForm.value.codLicencia.toUpperCase()
        };
        this.sitiosService.getDeuda(data2Send).subscribe((data:any)=>{
          console.log("data = ",data);
          this.presentModal(data);
        });
      }
      
    }
  }

}
