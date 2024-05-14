import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { PokemonListComponent } from './pokemon-base/pokemon-list/pokemon-list.component';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  isStylish: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass, NgStyle, NgIf, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pokemonName: string = '';

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

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }

  constructor() { }
}
