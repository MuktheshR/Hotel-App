import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { RouterLink,RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationFormComponent,
    ReservationListComponent,
    RouterLink,
    RouterModule,
    HomeModule
  ]
})
export class ReservationModule { }
