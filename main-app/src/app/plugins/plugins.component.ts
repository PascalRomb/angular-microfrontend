import { Component, OnInit } from '@angular/core';
import { MyPlugin } from "./utils/Plugin";
import { samplePlugins } from "./utils/samplePlugins";
import { RegisterCustomElement, RemoveCustomElement } from './utils/loader';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
  public plugins: MyPlugin [] = samplePlugins;
  constructor() { }

  ngOnInit(): void {
  }

  loadPlugin(plugin: MyPlugin){
    //load | remove plugin with loader service.
    if (plugin.active){
      RemoveCustomElement(plugin.name,plugin.url, {targetElement: plugin.target});
    } else {
      RegisterCustomElement(plugin.name,plugin.url, {targetElement: plugin.target});
    }
    plugin.active = !plugin.active;
  }

}
