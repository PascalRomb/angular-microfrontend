export class MyPlugin {
    public url: string;
    public name: string;
    public active : boolean = false;
    public target?: string;

    constructor(url: string, name:string, target?: string){
        this.url = url;
        this.name = name;
        this.target = target;
    }
}

/**
 * MyPlugin Model. 
 */
