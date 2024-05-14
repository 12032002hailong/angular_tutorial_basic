import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonBaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
