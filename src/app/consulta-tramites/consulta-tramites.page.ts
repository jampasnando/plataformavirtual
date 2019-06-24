import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
// import { TramiteService } from '../service/tramite.service';
// import { ModalPageComponent } from './modal/modal-page';
import { Modaltr1Page } from './modaltr1/modaltr1.page';
import { Modaltr2Page } from './modaltr2/modaltr2.page';
import { Tramite1Service } from '../service/tramite1.service';
import { Tramite2Service } from '../service/tramite2.service';

@Component({
  selector: 'app-consulta-tramites',
  templateUrl: './consulta-tramites.page.html',
  styleUrls: ['./consulta-tramites.page.scss'],
})
export class ConsultaTramitesPage implements OnInit {
	onRequest:boolean;
	consultaForm:FormGroup;
	fecha:Date= new Date();
	anoactual=this.fecha.getFullYear();
	vanos=[];
	// public i:number=0;
	
	error_messages = {
		'gestion':[
			{type:'required',message:'Este dato es requerido.'},
			{type:'minLength',message:'Este dato debe contener cuatro caracteres como minimo.'},
			{type:'maxLength',message:'Este dato debe contener cuatro caracteres como maximo.' }
		],
		'ntramite':[
			{type:'required',message:'Este dato es requerido.'}
		],
		'carnet':[
			{type:'required',message:'Este dato es requerido'}
		]
	};
  	constructor(private tramite1Service:Tramite1Service, private tramite2Service:Tramite2Service, public formBuilder:FormBuilder,public modalController:ModalController,public modalController1:ModalController,public modalController2:ModalController ,public alertCrl:AlertController) {
  		
  		this.consultaForm = this.formBuilder.group({
  			gestion: new FormControl(null,Validators.compose([
  				Validators.required,
  				Validators.minLength(4),
  				Validators.maxLength(4)  				
  				])),
  			ntramite: new FormControl(null,Validators.compose([
  				Validators.required
  				//Validators.pattern['expresion']
				  ])),
			carnet: new FormControl(null,Validators.compose([Validators.required]))
		  });
		this.onRequest = false;
  	}
	  
	  async presentAlert() {
		const alert = await this.alertCrl.create({
		  header: 'FALTAN DATOS',
		  subHeader: 'Todos los campos DEBEN ser llenados',
		  message: 'El año, número de trámite y número de C.I. son requeridos',
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
	  async presentAlert2() {
		const alert = await this.alertCrl.create({
		  header: 'EL SERVICIO ESTÁ INTERRUMPIDO TEMPORALMENTE',
		  subHeader: 'INTENTE REALIZAR SU CONSULTA MÁS TARDE',
		  message: '',
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
  	ngOnInit() {
		var i:number=+this.anoactual;
		console.log("i inicial=",i);
		while(i>=2016){
			this.vanos.push(i);
			i=i-1;
		}
		console.log("ano actual: ",this.anoactual);
		console.log("tam vector: ",this.vanos.length);
  	}
  	// async presentModal(data2Modal:any){
  	// 	const modal = await this.modalController.create({
  	// 		component:ModalPageComponent,
  	// 		componentProps:{data:data2Modal,father:this}
	// 	});		
	// 	return await modal.present();		  
	// }
	async presentModal1(data2Modal:any){
		const modal1 = await this.modalController1.create({
			component:Modaltr1Page,
			componentProps:{data:data2Modal,father:this}
		});		
		return await modal1.present();		  
	}
	async presentModal2(data2Modal:any){
		const modal2 = await this.modalController2.create({
			component:Modaltr2Page,
			componentProps:{data:data2Modal,father:this}
		});		
		return await modal2.present();		  
	}
	// closeModal(){
	// 	this.modalController.dismiss();
	// 	this.onRequest = false;
	// }
	closeModal1(){
		this.modalController1.dismiss();
		this.onRequest = false;
	}  	  	
  getTramite(){
		  console.log("bandera es "+this.onRequest);
		if(!this.onRequest){
			const data2Send = {
				gestion : this.consultaForm.value.gestion,
				ntramite : this.consultaForm.value.ntramite,
				carnet:this.consultaForm.value.carnet
			};
			if((data2Send.gestion!=null)&&(data2Send.ntramite!=null) && (data2Send.carnet!=null))
			{
				this.onRequest = true;
				this.tramite1Service.getTramite1(data2Send).subscribe((data:any)=>{
					console.log("resultado: ",data.NROTRAMITE);
					if(data.NROTRAMITE===0){
						console.log("el if da cero");
						this.tramite2Service.getTramite2(data2Send).subscribe((data:any)=>{
							console.log("data = ",data);
							this.presentModal2(data);
						},
						(error:any)=>{
							console.log("error404:",error);
							this.presentAlert2();
						}
						);
					}
					else{
						console.log("el if da distinto de cero");
						this.tramite1Service.getTramite1(data2Send).subscribe((data:any)=>{
							this.presentModal1(data);
						},
						(error:any)=>{
							console.log("error404:",error);
							this.presentAlert2();
						}
						)
					}
				});
				this.onRequest=false;
				
			}
			else{
				this.presentAlert();																																																																																																																																																																																																																			
			}
		}
  }

}
