import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css'],
})
export class CardPageComponent implements OnInit {
  pokemon!: Pokemon;
  sprite: string = 'front';

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.pokemonService.getSinglePokemon(params['id'])
        )
      )
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  setSprite() {
    return (this.sprite = 'back');
  }
}
