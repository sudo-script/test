import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './c.component.html',
  styleUrl: './c.component.scss'
})
export class CComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Loaded v/s Lost'
    },
    xAxis: {
      categories: [
        
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Loaded',
          y: 5162,
          color: '#198754',
        },
        {
          name: 'Lost',
          y: 701,
          color: '#dc3545',
        },
        
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })


}
