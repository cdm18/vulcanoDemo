import { Component,OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit{
  constructor(private modalSS: SwitchService){

  }
  ngOnInit(): void {

  }
  closeModal(){
    this.modalSS.$modal.emit(false)
  }





}
