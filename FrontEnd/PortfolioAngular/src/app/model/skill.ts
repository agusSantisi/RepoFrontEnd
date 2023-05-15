export class Skill {
    id :number;
    tecnologia: string;
    porcentaje: number;

    constructor(tecnologia: string, porcentaje: number){
        this.tecnologia = tecnologia;
        this.porcentaje = porcentaje;
    }
}
