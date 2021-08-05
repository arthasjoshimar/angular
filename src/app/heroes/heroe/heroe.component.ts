import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Iroman';
    edad: number = 34;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }
    obtenerDatos(): string {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 45;
    }
}