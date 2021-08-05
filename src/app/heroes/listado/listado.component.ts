import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Iroman', 'Thor', 'Black Widow'];
  heroeBorrado?: string = '';
  // esVacio: boolean = true;

  borrarHeroe(): void {
    console.log('Borrando');
    //this.heroes = this.heroes.splice(0, this.heroes.length - 1);
    this.heroeBorrado = this.heroes.shift();
    // this.heroes.length <= 0 ? this.esVacio = false : this.esVacio = true;
  }
}
