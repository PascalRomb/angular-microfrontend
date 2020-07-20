# Micro-Frontend Application with Angular

This is an Angular application that uses [Micro-Frontend architecture](https://micro-frontends.org/) and [Angular Elements](https://angular.io/guide/elements).

* **Main App:** retrieve info about available plugins and add/remove them at Runtime with a loader.
* **Plugin, on different endpoints:**
    * **Header:** loaded in header tag. It uses HttpModule and Rxjs.
    * **Carousel:** loaded in body. It's a carousel bootstrap sample.
    * **Grid:** loaded in body. It's a Kendo grid.

![Alt Text](https://github.com/PascalRomb/angular-microfrontend/blob/master/architecture_microfrontend.gif?raw=true)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Make your own plugin](#make-your-own-plugin)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
* [Angular: getting started](https://angular.io/guide/setup-local)
* Http server:
    ``` npm i -g http-server --save ```

## Installation

``` bash
#clone project
 git clone https://github.com/PascalRomb/angular-microfrontend.git 

#move into main app folder
 cd angular-microfontend/main-app/
#install node packages
 npm install

#move into plugins folder
 cd angular-microfontend/plugins/

    #move into header plugin
     cd header/
    #install node packages
     npm install
    #build single bundle
     ng build --prod --output-hashing none --single-bundle true 

    #move into carousel plugin
     cd carousel/
    #install node packages
     npm install
    #build single bundle
     ng build --prod --output-hashing none --single-bundle true

    #move into grid plugin
     cd grid/
    #install node packages
     npm install
    #build single bundle
     ng build --prod --output-hashing none --single-bundle true

```

## Usage

``` bash
#Main App folder
 ng serve [--open]

#Header folder
    http-server .\dist\header\ -p 8081

#Carousel folder
    http-server .\dist\carousel\ -p 8082

#Grid folder
    http-server .\dist\grid\ -p 8083

```

## Make your own plugin
  Create new Angular project and add elements
``` bash
 ng new custom-plugin #projectname, your choice
 ng generate component funny-plugin #pluginname, your choice 

 ng add @angular/elements
 ng add ngx-build-plus
```
Modify Angular.json

``` json
 "architect": {
        "build": {
          "builder": "ngx-build-plus:browser", //browser => build
          "options": {
            "outputPath": "dist/custom-plugin",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
```

Add this lines to src/main.ts & src/polyfills.ts.
``` javascript
/************************************
 * Remove comment on next line
 * If localize is required
 * import '@angular/localize/init';
 */
```

Modify src/index.html
``` hmtl
<body>
<!--change this-->
  <app-root></app-root> 
<!--into this so you can serve and build with no problems-->
 <app-funny-plugin></app-funny-plugin> <!--or your plugin selector--> 
</body>
```

Modify src/app/app.module.ts 
``` javascript
@NgModule({
  declarations: [
    AppComponent,
    FunnyPluginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
// to this
import {createCustomElement} from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
    FunnyPluginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [FunnyPluginComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(FunnyPluginComponent, { injector: this.injector });
    if(!customElements.get('app-funny-plugin'))
      customElements.define('app-funny-plugin', myCustomElement);
  }
}
```
Run application to see if it works

``` bash
ng serve [--open]
```

Build, run & test with tester.html

``` bash
ng build --prod --output-hashing none --single-bundle true 

http-server /dist/custom-plugin/ -p 8084 (by tester default, change ln. 19 in tester.html file)
(also change ln. 13 with your plugin name)

open tester.html with your browser, you should see your component page
```

## Documentation
[[1]](https://micro-frontends.org/) Micro-Frontend

[[2]](https://angular.io/guide/elements) Angular Elements

[[3]](https://medium.com/swlh/build-micro-frontends-using-angular-elements-the-beginners-guide-75ffeae61b58) “Build Micro Frontends using Angular Elements: The Beginner’s Guide”

[[4]](https://medium.com/@kitson.mac/wrapping-an-angular-app-in-a-custom-element-web-component-angular-element-in-4-simple-steps-ded3554e9006) 
“Angular Element (web components) wrapping an angular app in a custom element”

[[5]](https://medium.com/@kitson.mac/register-custom-element-dynamically-in-the-dom-with-custom-element-register-package-985f8284bcd) “Custom elements (web components) register dynamically in the DOM with custom-element-register package”

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)