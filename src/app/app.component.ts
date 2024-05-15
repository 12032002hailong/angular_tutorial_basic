import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonBaseModule, PokemonTemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
