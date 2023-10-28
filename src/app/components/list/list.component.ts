import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  getPokemonsList(): void {
    this.pokemonService.getPokemons().subscribe();
  }

  ngOnInit(): void {
    this.getPokemonsList();
  }
}
