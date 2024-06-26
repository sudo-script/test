import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLocation,
  faBriefcase,
  faLuggageCart,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faBriefcase = faBriefcase;
  faLuggageCart = faLuggageCart;
  faExclamationTriangle = faExclamationTriangle;

}
