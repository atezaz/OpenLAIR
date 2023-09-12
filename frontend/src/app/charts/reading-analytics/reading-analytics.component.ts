import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
const Draggable = require("highcharts/modules/draggable-points.js");
Draggable(Highcharts);

@Component({
  selector: "app-reading-analytics",
  templateUrl: "./reading-analytics.component.html",
  styleUrls: ["./reading-analytics.component.css"],
})
export class ReadingAnalyticsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.chartOptions = {
      title: {
        text: "Reading analytics",
      },
      subtitle: {
        text: "Reading analytics [134], Performance rating [128] Engagement rating [128] Active reading rating [128] Attendance rating [128], Reading Analytics [114] Ideal reading material [114]",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },

      plotOptions: {
        series: {
          stickyTracking: false,
          dragDrop: {
            draggableY: true,
          },
        },
        spline: {
          cursor: "ns-resize",
        },
      },
      series: [
        {
          name: "# reading sessions",
          data: [55, 21, 41, 68, 48, 87, 40, 52, 72, 60, 50, 15],
          type: "column",
        },
        {
          name: "rereading the same material",
          data: [22, 15, 30, 50, 52, 65, 51, 40, 53, 48, 31, 9],
          type: "column",
        },
        {
          name: "duration of reading sessions",
          data: [60, 19, 39, 72, 45, 90, 45, 44, 60, 52, 38, 14],
          type: "spline",
        },
      ],
    };
    HC_exporting(Highcharts);
  }
}
