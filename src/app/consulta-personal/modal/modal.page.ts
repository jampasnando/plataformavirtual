import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() father:any;
  @Input() data:any;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.closeModal();
    },20000);
  }
  closeModal(){
    this.father.cerrarModalUnPersonal();
  }
}
