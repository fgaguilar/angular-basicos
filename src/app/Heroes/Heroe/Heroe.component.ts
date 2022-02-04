import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'Heroe.component.html'
})

export class HeroeComponent {
    nombre:string = 'IronMan';
    edad:number = 45;

    get nombreCapitalzado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }
    
    cambiarEdad():void{
        this.edad = 30;
    }
}
