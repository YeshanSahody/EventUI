import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

@Component({
  selector: 'app-analytics-charts',
  templateUrl: './analytics-charts.component.html',
  styleUrl: './analytics-charts.component.scss'
})
export class AnalyticsChartsComponent implements AfterViewInit {
  @ViewChild('highchartsPieChart') private highchartsPieChartRef!: ElementRef;
  @ViewChild('highchartsBarChart') private highchartsBarChartRef!: ElementRef;
  @ViewChild('highchartsLineChart') private highchartsLineChartRef!: ElementRef;
  @ViewChild('highchartsAreaChart') private highchartsAreaChartRef!: ElementRef;
  @ViewChild('highchartsScatterPlot') private highchartsScatterPlotRef!: ElementRef;
  @ViewChild('highchartsBubbleChart') private highchartsBubbleChartRef!: ElementRef;

  // scrollToTop() {
  //   console.log('Scrolling to top...');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }


  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Event Management Program'
    },
    colors: ['#e94e0f', '#870b58', '#e4003a', '#f8ad07'],
    series: [{
      name: 'Highcharts Pie Chart',
      data: [
        ['Fun@Worx', 30],
        ['HR Team', 40],
        ['Payback Team', 20],
        ['SD Trails', 10]
      ]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      pie: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  bubbleChartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
    },
    title: {
      text: 'Event Management Program'
    },
    colors: ['#e94e0f', '#870b58', '#e4003a', '#f8ad07'],
    series: [{

      data: [
        ['Fun@Worx', 30],
        ['HR Team', 40],
        ['Payback Team', 20],
        ['SD Trails', 10]
      ]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      pie: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'SD Worx Group'
    },

    xAxis: {
      categories: ['Fun@Worx', 'HR Team', 'Payback Team']
    },
    yAxis: {
      title: {
        text: 'Event'
      }
    },
    colors: ['#f8ad07', '#870b58', '#e4003a',],
    series: [{
      name: 'Event Per Groups',
      data: [100, 20, 30],

    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Success Rate Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
      title: {
        text: 'Count'
      }
    },
    colors: ['#870b58', '#e4003a',],

    series: [{
      name: 'Highcharts Line Chart',
      data: [10, 20, 15, 25, 30]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  areaChartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Highcharts Area Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#e4003a'],

    series: [{
      name: 'Highcharts Area Chart',
      data: [10, 20, 15, 25, 30]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required

  scatterPlotOptions: Highcharts.Options = {
    chart: {
      type: 'scatter',
    },
    title: {
      text: 'Highcharts Scatter Plot'
    },
    xAxis: {
      title: {
        text: 'X-Axis'
      }
    },
    yAxis: {
      title: {
        text: 'Y-Axis'
      }
    },
    colors: ['#e94e0f'],

    series: [{
      name: 'Highcharts Scatter Plot',
      data: [[5, 10], [10, 15], [15, 20], [20, 25], [25, 30]]
    }] as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    }
  }; // required


  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    // optional function, defaults to null
    // You can add any additional logic or actions here
  };

  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  ngAfterViewInit() {
    // Initialize the exporting module
    HC_exporting(Highcharts);
    HC_exportData(Highcharts);

    // Create the pie chart
    this.createHighchartsChart(this.highchartsPieChartRef, this.pieChartOptions);

    // Create the bar chart
    this.createHighchartsChart(this.highchartsBarChartRef, this.barChartOptions);

    // Create the line chart
    this.createHighchartsChart(this.highchartsLineChartRef, this.lineChartOptions);

    // Create the area chart
    this.createHighchartsChart(this.highchartsAreaChartRef, this.areaChartOptions);

    // Create the scatter plot
    this.createHighchartsChart(this.highchartsScatterPlotRef, this.scatterPlotOptions);

    // Create the bubble chart
    this.createHighchartsChart(this.highchartsBubbleChartRef, this.bubbleChartOptions);
  }

  private createHighchartsChart(chartRef: ElementRef, options: Highcharts.Options) {
    const ctx = (chartRef.nativeElement as HTMLDivElement).querySelector('.chart-container') as HTMLElement;
    const chart = new Highcharts.Chart(ctx, options);

    // Add a click event to the chart to trigger the download
    if (chart.options && chart.options.chart) {
      chart.options.chart.events = {
        click: function () {
          // Handle click event, e.g., show a menu or trigger the download
          const exportOptions: Highcharts.ExportingOptions = {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' as Highcharts.ExportingMimeTypeValue,
            filename: 'chart-export',
          };

          // Use exportChart method directly with correct type for options
          Highcharts.Chart.prototype.exportChart.call(chart, exportOptions, {});
        }
      };
    }
  }
}
