import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
	selector:'modal.page',
	templateUrl:'./modal.page.html',
	styleUrls: ['./modal.page.scss'],
})

export class ModalPageComponent implements OnInit{
	@Input()father:any;
	param1:any[];
	@Input()
	public set data(v : any) {		
		if(Array.isArray(v)){
			this.param1 = v;
		}else{
			this.param1.push(v);
		}
	}
	@Output() eventEmitter = new EventEmitter();
	constructor(){
		this.param1 = [];

	}
	ngOnInit(){
		setTimeout(()=>{
			this.closeModal();
		  },20000);
	}
	closeModal(){		
		this.father.closeModal();
		this.father.sitiosForm.reset();	
	}
}