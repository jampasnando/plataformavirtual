import { Component } from '@angular/core';

import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  counter:number;
  timer:any;
  public inicio=0;
  public correvideo=false;
  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              public navCrl:NavController,
              public network:Network,
              public dialogs:Dialogs,
              public alertCrl:AlertController) {
    this.initVariables();
    this.initializeApp();
    this.network.onDisconnect().subscribe(()=>{
      console.log("Perdimos conexión");
      this.muestraAlertaRed();
    });
    this.network.onConnect().subscribe(()=>{
      this.alertCrl.dismiss();
    });
  }
  async muestraAlertaRed(){
    var alerta=await this.alertCrl.create({
      header:"LA CONEXIÓN DE RED SE INTERRUMPIÓ",
      subHeader:"POR FAVOR ESPERAR A QUE SE REESTABLEZCA DICHA CONEXIÓN",
      // backdropDismiss:false
    });
    await alerta.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  initVariables(){
    this.counter = 120;
    this.timer = setInterval(this.changeTime.bind(this), 1000);
  }
  resetTime(){
    
    this.inicio=0;
    this.correvideo=false;
    console.log("resetTime() y correvideo: ",this.correvideo);
    
  }
  changeTime(){
    this.inicio++;
    if((this.inicio%this.counter)===0 && !this.correvideo){
      
      this.correvideo=true;
      this.navCrl.navigateForward('home');
      console.log("correvideo: ",this.correvideo);
    }
    if(this.inicio>1000){
      this.inicio=0;
    }
    console.log("changeTime():",this.inicio);
    
    // clearInterval(this.timer);
  }
}
