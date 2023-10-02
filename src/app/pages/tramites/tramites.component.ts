import { Component } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class TramitesComponent {
  constructor() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
