import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './core/components/events/events.component';
import { RegisterComponent } from './core/components/register/register.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./public/pages/home/home.module").then(m => m.HomeModule)


  },
  {
    path: 'eventos',
    component: EventsComponent,

  },
  {
    path: 'login',
    component: RegisterComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
