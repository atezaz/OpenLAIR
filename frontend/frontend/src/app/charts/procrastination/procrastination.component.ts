import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-procrastination",
  templateUrl: "./procrastination.component.html",
  styleUrls: ["./procrastination.component.css"],
})
export class ProcrastinationComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "scatter",
        zoomType: "xy",
      },
      title: {
        text: "Procrastination",
      },
      subtitle: {
        text: "Procrastination [102] Performance [102], Procrastination [107]",
      },
      xAxis: {
        title: {
          enabled: true,
          text: "Days until course material access after semester start",
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: "Score",
        },
        max: 100,
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: 10,
        y: 90,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1,
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)",
              },
            },
          },
          states: {
            hover: {
              marker: {
                enabled: false,
              },
            },
          },
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: "{point.x} days: {point.y} points",
          },
        },
      },
      series: [
        {
          name: "Student",
          color: "rgba(223, 83, 83, .5)",
          data: [
            [1, 100],
            [1, 89],
            [1, 93],
            [1, 87],
            [1, 70],
            [2, 84],
            [2, 72],
            [2, 55],
            [3, 31],
            [3, 45],
            [3, 72],
            [3, 88],
            [4, 55],
            [4, 11],
            [4, 85],
            [4, 52],
            [5, 50],
            [5, 42],
            [5, 33],
            [6, 33],
            [6, 52],
            [7, 33],
            [8, 20],
            [9, 15],
            [9, 23],
            [10, 14],
            [11, 3],
            [12, 0],
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
