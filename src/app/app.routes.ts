import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const APP_ROUTES: Routes = [
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
    