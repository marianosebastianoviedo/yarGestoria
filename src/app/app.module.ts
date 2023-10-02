import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { APP_ROUTING } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { VentaformularioComponent } from './pages/ventaformulario/ventaformulario.component';
import { EmbarcacionesComponent } from './pages/embarcaciones/embarcaciones.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AcercaComponent } from './pages/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    ContactoComponent,
    TramitesComponent,
    VentaformularioComponent,
    EmbarcacionesComponent,
    AcercaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
