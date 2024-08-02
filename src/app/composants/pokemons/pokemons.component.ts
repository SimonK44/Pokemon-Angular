import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  private _pokemons: any[];

  constructor() {

    this._pokemons = [
      {
      id : "001",
      nom : "Bulbizarre", 
      categorie : "Graine",
      type : "plante et poison",
      taille : 70,
      poids : 6.9
      },
      {
      id : "002",
      nom : "Herbizarre", 
      categorie : "Graine",
      type : "plante et poison",
      taille : 1,
      poids : 13
      }    
    ]
  }

public get pokemons(): any[] {
  return this._pokemons;
}

public set pokemons(value: any[]) {
  this._pokemons = value;
}


  

}
