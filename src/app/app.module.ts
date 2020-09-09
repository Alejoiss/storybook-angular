import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReclamacaoListaComponent } from './components/reclamacao-lista/reclamacao-lista.component';
import { ReclamacaoItemComponent } from './components/reclamacao-item/reclamacao-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReclamacaoListaComponent,
    ReclamacaoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
