export interface IAttribute {
    name: string;
    value: string;
   }
  
   export interface IEvent {
    name: string;
    callback: any;
   }
   
   export interface IOptions {
     targetElement?:string;
     className?: string;
     attributes?: IAttribute[];
     events?: IEvent[];
   }
  
   const RegisterScript = (name: string, src: string): void => {
    // dynamically insert script (if doesn't already exist)
    let _src = src + "/main.js";
    if (!document.getElementById(name)) {
      const script = document.createElement('script');
      script.src = _src;
      script.id = name+"-script";
      // script.onerror = () => console.error(`error loading ${src}`);
      document.body.appendChild(script);
    }
  };

   const RegisterStyle = (name: string, src: string): void => {
    // dynamically insert script (if doesn't already exist)
    let _name = name + "-style";
    let _src = src + "/styles.css";
    if (!document.getElementById(_name)) {
      const style = document.createElement('link');
      style.href = _src;
      style.rel="styleSheet"
      style.id = _name;

      document.head.appendChild(style);
    }
  };
  
   const CreateElement = (name: string, options?: IOptions): void => {
    // dynamically insert element
    const element: HTMLElement = document.createElement(name);
    element.id=name+"-component";


    //add to #body if exists or body
    let container: HTMLElement = document.getElementById('body') || document.body;
    // add container
    if (options && options.targetElement) {
        container = document.getElementById(options.targetElement);
    }
    // add class
    if (options && options.className) {
        element.className = options.className;
    }
    // add attributes
    if (options && options.attributes && options.attributes.length > 0) {
        options.attributes.forEach((attr: IAttribute) => element.setAttribute(attr.name, attr.value));
    }
    // add events
    if (options && options.events && options.events.length > 0) {
        options.events.forEach((evt: IEvent) => element.addEventListener(evt.name, evt.callback));
    }
    // element.addEventListener('message', msg => console.log(msg));

    //modified
    container.appendChild(element);
  };
  
  //TODO handle remove
  export const RegisterCustomElement = (name: string, src: string,  options?: IOptions): void => {
    RegisterStyle(name, src);
    RegisterScript(name, src);
    CreateElement(name, options);
  };

  export const RemoveCustomElement = (name: string, src: string,  options?: IOptions) : void => {
    
    let container: HTMLElement = document.getElementById('body') || document.body;
      // add container
    if (options && options.targetElement) {
        container = document.getElementById(options.targetElement);
    }

    //remove element
    let element: HTMLElement = document.getElementById(name+"-component");
    if(element) element.parentNode.removeChild(element);

    //remove script
   element = document.getElementById(name+"-script");
   if(element) element.parentNode.removeChild(element);
    //remove style
   element = document.getElementById(name+"-style");
   if(element) element.parentNode.removeChild(element);
  };