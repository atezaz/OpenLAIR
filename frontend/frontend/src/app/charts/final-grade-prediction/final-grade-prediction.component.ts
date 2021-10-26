import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-final-grade-prediction",
  templateUrl: "./final-grade-prediction.component.html",
  styleUrls: ["./final-grade-prediction.component.css"],
})
export class FinalGradePredictionComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    this.chartOptions = {
      chart: {
        type: "column",
      },
      title: {
        text: "Final grade prediction",
      },
      subtitle: {
        text: "Final Grade Prediction [28], Grade prediction (by performance / Course difficulty level) [83], Performance [83], Course difficulty level [83], Predict exam grades [78], Predict Student Grades [115], Predict exam success [60], Performance Prediction [37] Success Prediction [37], Success Prediction [105], Predict academic achievement [81], Predict Final Grade [119]",
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
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Final grade",
        },
        max: 100,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Number of New blog posts in group blog",
          data: [40, 90, 70, 18, 40],
        },
        {
          name: "Number of Topics that each user has uploaded on group discussion",
          data: [30, 60, 30, 80, 100],
        },
        {
          name: "Number of Comments on blog posts in group blog",
          data: [30, 20, 10, 20, 10],
        },
        {
          type: "scatter",
          data: [25, 40, 25, 30, 40, 50],
          dashStyle: "shortdot",
          name: "Final grade prediction",
        },
      ],
    };
    HC_exporting(Highcharts);
  }
}
