import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { PageComponent } from './components/page/page.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { PresentComponent } from './components/present/present.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    CardComponent,
    PageComponent,
    AnuncioComponent,
    PresentComponent,
    GalleryComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
