import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, PokemonBaseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
