import { Component, OnInit } from '@angular/core';
import { PokemonIntro } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  public pokemons: PokemonIntro[] = [];
  constructor(private pokemonService: PokemonService) {}

  getPokemonsList(): void {
    this.pokemonService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }

  ngOnInit(): void {
    this.getPokemonsList();
  }
}
