import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-droppingout",
  templateUrl: "./droppingout.component.html",
  styleUrls: ["./droppingout.component.css"],
})
export class DroppingoutComponent implements OnInit {
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
        type: "scatter",
        zoomType: "xy",
      },
      title: {
        text: "Dropping out",
      },
      subtitle: {
        text: "Dropping out [59], Early Warning [79] Dropout Prediction [79], Course Planning [99] Early Warning [99], At-Risk Students [101] Early warning [101], At-Risk Students [64] Retention Prediction [64], At-Risk students [71] Exam success prediction [71], At-risk students [131] performance [131]",
      },
      tooltip: { enabled: false },
      xAxis: {
        min: -100,
        max: 100,
        tickInterval: 100,
        minorTickInterval: 10,
        tickLength: 0,
        minorTickLength: 0,
        labels: {
          enabled: false,
        },
        title: {
          enabled: true,
          text: "Academic Performance",
        },
        /*
        plotLines:[{
            value:0,
            color:'#666',
            width:1
        }],
        */
        gridLineWidth: 2,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          enabled: true,
          text: "Academic Engagement",
        },
        min: -100,
        max: 100,
        labels: {
          enabled: false,
        },
        tickInterval: 100,
        minorTickInterval: 10,
        tickLength: 0,
        minorTickLength: 0,
        gridLineWidth: 2,
        plotLinesplotLines: [
          {
            value: 0,
            color: "#666",
            width: 1,
          },
        ],
      },

      plotOptions: {},
      series: [
        {
          name: "Second Semester Drop-out",
          color: "rgba(223, 83, 83, .8)",
          data: [
            { x: -90, y: -10 },
            { x: -91, y: -31 },
            { x: -85, y: -67 },
            { x: -80, y: -85 },
            { x: -37, y: -48 },
            { x: -20, y: -35 },
            { x: -45, y: -35 },
            { x: -75, y: -50 },
            { x: -50, y: -30 },
            { x: -30, y: -30 },
            { x: -50, y: -90 },
            { x: -20, y: -95 },
            { x: 10, y: -73 },
            { x: 15, y: -93 },
            { x: 30, y: -85 },
            { x: 40, y: -63 },
            { x: -95, y: 10 },
            { x: -91, y: 60 },
            { x: -85, y: 83 },
            { x: -80, y: 10 },
            { x: -65, y: 10 },
            { x: -45, y: 10 },
            { x: -35, y: 30 },
            { x: -55, y: 50 },
            { x: 10, y: 20 },
          ],
        },
        {
          name: "Second Semester Stayer",
          color: "rgba(64, 205, 23,  .8)",
          data: [
            { x: -30, y: -10 },
            { x: -15, y: -12 },
            { x: -17, y: -20 },
            { x: -30, y: -70 },
            { x: -10, y: -80 },
            { x: 10, y: -10 },
            { x: 13, y: -30 },
            { x: 20, y: -15 },
            { x: 22, y: -23 },
            { x: 18, y: -34 },
            { x: 30, y: -50 },
            { x: 45, y: -15 },
            { x: 55, y: -9 },
            { x: 86, y: -7 },
            { x: 85, y: -50 },
            { x: 80, y: -90 },
            { x: 77, y: -55 },
            { x: -50, y: 95 },
            { x: -40, y: 85 },
            { x: -30, y: 82 },
            { x: -15, y: 77 },
            { x: -20, y: 70 },
            { x: 20, y: 25 },
            { x: 15, y: 30 },
            { x: 17, y: 34 },
            { x: 25, y: 77 },
            { x: 30, y: 92 },
            { x: 43, y: 67 },
            { x: 45, y: 55 },
            { x: 40, y: 20 },
            { x: 60, y: 16 },
            { x: 75, y: 18 },
            { x: 80, y: 40 },
            { x: 76, y: 49 },
            { x: 65, y: 85 },
            { x: 53, y: 67 },
            { x: 58, y: 73 },
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
