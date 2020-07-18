import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { createCustomElement} from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [HeaderComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {}
  
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(HeaderComponent, {injector: this.injector});
    if(!customElements.get('header-plugin')) {
      customElements.define('header-plugin', myCustomElement);
    }
  }
}
