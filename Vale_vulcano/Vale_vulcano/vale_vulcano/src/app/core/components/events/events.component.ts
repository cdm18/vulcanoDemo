import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  modalSwitch:boolean=false;

    constructor(private modalSS:SwitchService){

    }

    ngOnInit(){
      this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch=valor})
    }

    openModal(){
      this.modalSwitch=true;
    }
}


