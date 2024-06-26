import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTv,
  faUserCircle,
  faPlaneArrival,
  faPlaneDeparture,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faTv = faTv;
  faUserCircle = faUserCircle;
  faPlaneArrival = faPlaneArrival;
  faPlaneDeparture = faPlaneDeparture;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
}
