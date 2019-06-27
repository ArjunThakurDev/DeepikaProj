import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChargeSessionListComponent } from './charge-session-list/charge-session-list.component';
import { RouterModule } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { StopSessionComponent } from './stop-session/stop-session.component';
import { ChargersComponent } from './chargers/chargers.component';
import { AddChargerComponent } from './add-charger/add-charger.component';
import { UpdateChargerComponent } from './update-charger/update-charger.component';
import { DeleteChargerComponent } from './delete-charger/delete-charger.component';
import { ChargerListComponent } from './charger-list/charger-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ChargeSessionListComponent,
    AddSessionComponent,
    StopSessionComponent,
    ChargersComponent,
    AddChargerComponent,
    UpdateChargerComponent,
    DeleteChargerComponent,
    ChargerListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home',component :WelcomeComponent},
      {path:'sessions',component :ChargeSessionListComponent},
      {path:'chargers', component :ChargersComponent },
      {path:'chargers/:id',component:ChargerListComponent},
     {path:'addsession',component :AddSessionComponent},
     {path:'stopsession',component :StopSessionComponent},
     {path:'addcharger',component:AddChargerComponent},
     {path:'updatecharger',component:UpdateChargerComponent},
     {path:'deletecharger',component:DeleteChargerComponent},
     {path:'',redirectTo:'home', pathMatch: 'full'}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 