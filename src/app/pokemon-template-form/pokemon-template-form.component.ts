import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../service/pokemon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pokemon-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    { key: 0, value: 'Fire' },
    {
      key: 1,
      value: 'Water',
    },
  ];

  constructor(private pokemonService: PokemonService) {}

  toggleIsCool(object: any) {
    console.log(object);
  }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
  handleSubmit(object: any) {
    console.log(object.value);
  }
}
