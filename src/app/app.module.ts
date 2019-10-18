import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { BootService } from './services/boots.service';


// Routing
import { app_routing } from './app.routes';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [BootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
