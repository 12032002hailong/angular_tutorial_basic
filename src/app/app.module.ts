import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    PokemonBaseModule,
    FormsModule,
  ],
  declarations: [AppComponent, PokemonTemplateFormComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
