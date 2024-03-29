import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { EmbarcacionesComponent } from './pages/embarcaciones/embarcaciones.component';
import { VentaformularioComponent } from './pages/ventaformulario/ventaformulario.component';
import { AcercaComponent } from './pages/acerca/acerca.component';


const APP_ROUTES: Routes = [
    {
      path: 'acerca',
      component: AcercaComponent,
    },
    {
      path: 'formularios',
      component: VentaformularioComponent,
    },
    {
      path: 'servicios',
      component: EmbarcacionesComponent,
    },
    {
      path: 'tramites',
      component: TramitesComponent,
    },
    {
      path: 'contacto',
      component: ContactoComponent,
    },
    {
      path: 'inicio',
      component: InicioComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio',
      }
    ];
    
    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
    