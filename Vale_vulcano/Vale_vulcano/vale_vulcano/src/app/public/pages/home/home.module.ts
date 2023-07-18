import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EntornoComponent } from 'src/app/core/components/entorno/entorno.component';
import { AgendaComponent } from 'src/app/core/components/agenda/agenda.component';
import { NetsComponent } from 'src/app/core/components/nets/nets.component';

@NgModule({
  declarations: [
    HomeComponent,
    EntornoComponent,
    AgendaComponent,
    NetsComponent


  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
