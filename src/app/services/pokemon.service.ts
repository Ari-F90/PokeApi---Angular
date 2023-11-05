import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';

import { ResponseApi, PokemonIntro } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonIntro[]> {
    return this.http
      .get<ResponseApi>(`${this.apiUrl}/pokemon?limit=151`)
      .pipe(map(this.getPokemonProps));
  }

  getPokemonProps(data: ResponseApi): PokemonIntro[] {
    const list = data.results.map((pokemon) => {
      let name: string = pokemon.name;
      let id = pokemon.url.split('/')[6];
      let image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return { name, id, image };
    });
    return list;
  }
}
