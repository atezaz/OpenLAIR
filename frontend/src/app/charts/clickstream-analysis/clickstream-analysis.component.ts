import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-clickstream-analysis",
  templateUrl: "./clickstream-analysis.component.html",
  styleUrls: ["./clickstream-analysis.component.css"],
})
export class ClickstreamAnalysisComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    this.chartOptions = {
      title: {
        text: "Clickstream Analysis",
      },
      subtitle: {
        text: "Clickstream Analysis [103] Student behavior [103]",
      },
      xAxis: {
        tickInterval: 1,
        type: "linear",
        accessibility: {
          rangeDescription: "Range: 1 to 30",
        },
      },

      yAxis: {
        type: "linear",
        minorTickInterval: 0.1,
        accessibility: {
          rangeDescription: "Range: 1 to 1000",
        },
        title: {
          text: "Average Number of Clicks",
        },
      },

      tooltip: {
        headerFormat: "<b>{series.name}</b><br />",
        pointFormat: "Day = {point.x}, Clicks = {point.y}",
      },

      series: [
        {
          name: "Average Number of Clicks per Day",
          data: Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 500)
          ),
          pointStart: 1,
        },
      ],
    };
    HC_exporting(Highcharts);
  }
}
