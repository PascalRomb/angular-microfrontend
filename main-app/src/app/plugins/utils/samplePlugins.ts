import { MyPlugin } from "./Plugin";

export const samplePlugins : MyPlugin [] = [
    new MyPlugin("http://localhost:8081", "header-plugin", "header"), //rxjs && httpModule
    new MyPlugin("http://localhost:8082", "carousel-plugin"), //boostrap carousel
    new MyPlugin("http://localhost:8083", "grid-plugin"), //kendo grid
]


/**
 * Sample of available plugins.
 * You can also retrieve from custom endpoint, at runtime.
 * Better way.
 */