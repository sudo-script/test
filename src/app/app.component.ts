import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ChartModule } from 'angular-highcharts';
import { MComponent } from './m/m.component';
import { CComponent } from './c/c.component';
import { TComponent } from './t/t.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DeparturesComponent } from './departures/departures.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ArrivalsComponent,DeparturesComponent,MComponent,CComponent,TComponent, MainComponent, SideNavComponent, HeaderComponent, ChartModule, TopWidgetsComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
