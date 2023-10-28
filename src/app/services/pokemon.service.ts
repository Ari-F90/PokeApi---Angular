import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}`).pipe(tap((resp) => resp));
  }
}
