import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-time-distribution",
  templateUrl: "./time-distribution.component.html",
  styleUrls: ["./time-distribution.component.css"],
})
export class TimeDistributionComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    (this.chartOptions = {
      chart: {
        type: "column",
      },
      title: {
        text: "Time distribution",
      },
      subtitle: {
        text: "Time Distribution [39] Resource Usage Awareness [39] Self-reflection [39]",
      },
      xAxis: {
        categories: [
          "WK 1",
          "WK 2",
          "WK 3",
          "WK 4",
          "WK 5",
          "WK 6",
          "WK 7",
          "WK 8",
          "WK 9",
          "WK 10",
          "WK 11",
          "WK 12",
        ],
      },
      yAxis: {
        min: 0,
        title: {
          text: "Weekly activity",
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        shared: true,
      },
      plotOptions: {
        column: {
          stacking: "percent",
        },
      },
      series: [
        {
          name: "# posts",
          data: [38, 42, 37, 62, 30, 25, 21, 60, 15, 30, 46, 30],
        },
        {
          name: "# visits",
          data: [30, 20, 25, 68, 42, 20, 15, 55, 23, 34, 40, 50],
        },
        {
          name: "# comments",
          data: [10, 15, 14, 22, 8, 5, 7, 23, 15, 13, 20, 24],
        },
        {
          name: "time spent in application",
          data: [50, 44, 38, 30, 42, 48, 52, 20, 15, 60, 72, 53],
          type: "spline",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
