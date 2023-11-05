import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http
      .get<ResponseApi>(`${this.apiUrl}/pokemon?limit=151`)
      .pipe(map(this.getPokemonProps));
  }

  getPokemonProps(data: ResponseApi) {
    const list = data.results.map((pokemon) => {
      let name: string = pokemon.name;
      let id = pokemon.url.split('/')[6];
      let image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return { name, id, image };
    });
    return list;
  }
}
