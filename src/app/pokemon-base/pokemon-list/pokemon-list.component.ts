import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: false,
    },
    {
      id: 2,
      name: 'overgrow',
      type: 'fire',
      isCool: true,
      isStylish: true,
    },
    {
      id: 3,
      name: 'chlorophyll',
      type: 'water',
      isCool: false,
      isStylish: false,
    },
    {
      id: 4,
      name: 'crystal',
      type: 'yellow',
      isCool: true,
      isStylish: true,
    },
    {
      id: 5,
      name: 'emerald',
      type: 'sapphire',
      isCool: true,
      isStylish: true,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

}
