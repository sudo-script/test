import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTools,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-t',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './t.component.html',
  styleUrl: './t.component.scss'
})
export class TComponent {
  faTools = faTools;
  alarms = [
    {
      id: 1,
      time: "13:44",
      equipment: "TC-01",
      type: "Jam Fault",
      status: "fixed",
    },
    {
      id: 2,
      time: "15:01",
      equipment: "PE2/TC1-09",
      type: "Motor Disconnect",
      status: "fixed",
    },
    {
      id: 3,
      time: "20:34",
      equipment: "VIEW-TC01",
      type: "VFD Fault",
      status: "Pending",
    },
    
  ];
}
