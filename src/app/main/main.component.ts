import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { MComponent } from '../m/m.component';
import { CComponent } from '../c/c.component';
import { TComponent } from '../t/t.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, CComponent, MComponent, TComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
