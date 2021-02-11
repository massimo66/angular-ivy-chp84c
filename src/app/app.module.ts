import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlightsService } from './flights.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,  HomeComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FlightsService]
})
export class AppModule { }
