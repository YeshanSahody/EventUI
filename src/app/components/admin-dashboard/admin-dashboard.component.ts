import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements AfterViewInit {
  @ViewChild('highchartsChart') private highchartsChartRef!: ElementRef;

  scrollToTop() {
    console.log('Scrolling to top...');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  updateFlag: boolean = false;

  // Bar Chart
  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Highcharts Bar Chart'
    },
    xAxis: {
      categories: ['Fun@Worx', 'HR Team', 'Payback Team']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#e94e0f'],
    series: [{
      name: 'Bar Chart',
      type: 'bar', // Specify the chart type
      data: [10, 20, 30]
    }]
  };

  // Line Chart
  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Highcharts Line Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#870b58'],
    series: [{
      name: 'Line Chart',
      type: 'line', // Specify the chart type
      data: [30, 20, 10]
    }]
  };

  // Area Chart
  areaChartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Highcharts Area Chart'
    },
    xAxis: {
      categories: ['Label 1', 'Label 2', 'Label 3']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#e4003a',],
    series: [{
      name: 'Area Chart',
      type: 'area', // Specify the chart type
      data: [5, 15, 25]
    }]
  };

  // Pie Chart
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Highcharts Pie Chart'
    },
    colors: ['#e94e0f', '#870b58', '#e4003a', '#f8ad07'],
    series: [{
      name: 'Pie Chart',
      type: 'pie', // Specify the chart type
      data: [
        ['Fun@Worx', 30],
        ['HR Team', 40],
        ['Payback Team', 20],
        ['SD Trails', 10]
      ]
    }]
  };

  // Column Chart
  columnChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Highcharts Column Chart'
    },
    xAxis: {
      categories: ['Fun@Worx', 'HR Team', 'Payback Team']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#f8ad07'],
    series: [{
      name: 'Column Chart',
      type: 'column', // Specify the chart type
      data: [25, 15, 30]
    }]
  };

  constructor() { }

  ngAfterViewInit() {
    this.createHighchartsChart();
  }

  private createHighchartsChart() {
    // You can customize this method to update the chart dynamically if needed
  }
}