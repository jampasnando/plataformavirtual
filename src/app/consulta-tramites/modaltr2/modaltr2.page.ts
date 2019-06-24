import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modaltr2',
  templateUrl: './modaltr2.page.html',
  styleUrls: ['./modaltr2.page.scss'],
})
export class Modaltr2Page implements OnInit {
  @Input() father:any;
  @Input() data:any;
  constructor() { }

  ngOnInit() {
    console.log("modaltr2 recibe...: ",this.data.data.nombre);
    setTimeout(()=>{
      this.closeModal2();
    },20000);
  }
  closeModal2(){		
		this.father.closeModal1();
		this.father.consultaForm.reset();	
	}
}
