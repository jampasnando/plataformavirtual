import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modaltr1',
  templateUrl: './modaltr1.page.html',
  styleUrls: ['./modaltr1.page.scss'],
})
export class Modaltr1Page implements OnInit {
  @Input() father:any;
  @Input() data:any;
  constructor() { }

  ngOnInit() {
    console.log(this.data.COMUNA);
    setTimeout(()=>{
      this.closeModal1();
    },20000);
  }
  closeModal1(){		
		this.father.closeModal1();
		this.father.consultaForm.reset();	
	}
}
