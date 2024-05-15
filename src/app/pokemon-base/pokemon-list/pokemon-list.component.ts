import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) { }



  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    });
  }

}
