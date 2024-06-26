import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-m',
  standalone: true,
  imports: [ChartModule,],
  templateUrl: './m.component.html',
  styleUrl: './m.component.scss',
  
})
export class MComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'TIMELINE'
    },
    xAxis: {
      categories: [
        '0:00',
        '2:00',
        '4:00',
        '6:00',
        '8:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        name: "Loaded",
        type: "line",
        color: '#198754',
        data: [292, 203, 320, 459, 492, 398, 523, 488, 305, 553, 581, 548]
      },
      {
        name: 'Lost',
        type: 'line',
        color: '#dc3545',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })
}
