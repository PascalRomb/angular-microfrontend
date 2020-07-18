import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { createCustomElement} from '@angular/elements';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [CarouselComponent]
})
export class AppModule { 

  constructor(private injector: Injector){}
  
  ngDoBootstrap () {
    const myCustomElement = createCustomElement(CarouselComponent, {injector: this.injector});
    if(!customElements.get('carousel-plugin')) {
      customElements.define('carousel-plugin', myCustomElement);
    }
  }
}
