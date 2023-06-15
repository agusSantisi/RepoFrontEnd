export class Proyecto {
    id? : number;
    nombreP : string;
    descripcionP : string;
    link: string;
    
    constructor(nombreP : string , descripcionP : string, link: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.link = link;
    }
}