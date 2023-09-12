import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-learning-behavior-patterns",
  templateUrl: "./learning-behavior-patterns.component.html",
  styleUrls: ["./learning-behavior-patterns.component.css"],
})
export class LearningBehaviorPatternsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "area",
      },
      title: {
        text: "Learning behavior patterns",
      },
      subtitle: {
        text: "Learning Behavior Patterns [111], Learning Patterns [132], Learning Strategies [118]",
      },
      xAxis: {
        tickmarkPlacement: "on",
        labels: {
          enabled: false,
        },
        title: {
          text: "Learning Sequence",
        },
      },
      yAxis: {
        labels: {
          format: "{value}%",
        },
        title: {
          enabled: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
        split: true,
      },
      plotOptions: {
        area: {
          stacking: "percent",
          lineColor: "#ffffff",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#ffffff",
          },
        },
      },
      series: [
        {
          name: "Video views",
          data: [50, 63, 89, 94, 14, 36, 52],
        },
        {
          name: "Incorrectly solved assessment item",
          data: [10, 10, 11, 13, 21, 76, 17],
        },
        {
          name: "Correctly solved MCQ",
          data: [16, 20, 27, 48, 54, 79, 62],
        },
        {
          name: "Incorrectly solved MCQ",
          data: [18, 31, 54, 15, 33, 81, 11],
        },
        {
          name: "Reading material page views",
          data: [63, 32, 22, 16, 13, 30, 46],
        },
        {
          name: "Correctly solved assessment item",
          data: [22, 18, 12, 16, 13, 30, 46],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
