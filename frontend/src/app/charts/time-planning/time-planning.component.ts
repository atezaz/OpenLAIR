import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
const drilldown = require("highcharts/modules/drilldown.js");
drilldown(Highcharts);
@Component({
  selector: "app-time-planning",
  templateUrl: "./time-planning.component.html",
  styleUrls: ["./time-planning.component.css"],
})
export class TimePlanningComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    //Set the chart data after we get the indicator and metrics
    this.setData();
  }
  setData() {
    (this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Time planning",
      },
      subtitle: {
        text: "Collaborative Learning [47] Time Planning [47], Temporal Analysis [68], Recommendations for successful course completion [125] Self-regulation [125] Timeline (status and goal) [125]",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: "Time spent on reading",
              y: 61.41,
              sliced: true,
              selected: true,
              drilldown: "reading",
            },
            {
              name: "Time spent on planning",
              y: 11.84,
              drilldown: "planning",
            },
            {
              name: "Time spent on discussion forum",
              y: 10.85,
              drilldown: "forum",
            },
          ],
        },
      ],
      drilldown: {
        series: [
          {
            name: "Time spent on reading per day",
            id: "reading",
            data: [
              ["Monday", 22],
              ["Tuesday", 15],
              ["Wednesday", 10],
              ["Thursday", 33],
              ["Friday", 20],
            ],
          },
          {
            name: "Time spent on planning per day",
            id: "planning",
            data: [
              ["Monday", 38],
              ["Tuesday", 22],
              ["Wednesday", 8],
              ["Thursday", 20],
              ["Friday", 12],
            ],
          },
          {
            name: "Time spent on forum per day",
            id: "forum",
            data: [
              ["Monday", 29],
              ["Tuesday", 30],
              ["Wednesday", 15],
              ["Thursday", 20],
              ["Friday", 6],
            ],
          },
        ],
      },
    }),
      HC_exporting(Highcharts);
  }
}
