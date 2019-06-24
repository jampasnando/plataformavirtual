import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalpta',
  templateUrl: './modalpta.page.html',
  styleUrls: ['./modalpta.page.scss'],
})
export class ModalptaPage implements OnInit {
  @Input() father:any;
  @Input() data:any;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.cerrarModalpta();
    },30000);
  }
  cerrarModalpta(){
    this.father.closeModalpta();
    this.father.consultaPTA.reset();
  }
}
