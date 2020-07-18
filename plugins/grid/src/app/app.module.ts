import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGridComponent } from './grid/grid.component';
import { createCustomElement} from '@angular/elements';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule
  ],
  entryComponents: [MyGridComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}
  ngDoBootstrap () {
    const myCustomElement = createCustomElement(MyGridComponent, {injector: this.injector});
    if(!customElements.get('grid-plugin')) {
      customElements.define('grid-plugin', myCustomElement);
    }
  }
}
