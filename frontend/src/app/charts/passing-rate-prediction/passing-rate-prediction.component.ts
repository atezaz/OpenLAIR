import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-passing-rate-prediction",
  templateUrl: "./passing-rate-prediction.component.html",
  styleUrls: ["./passing-rate-prediction.component.css"],
})
export class PassingRatePredictionComponent implements OnInit {
  chartOptions: {};
  chartOptions2: {};
  Highcharts = Highcharts;

  series_a;
  selectedOption: string;

  constructor() {}

  ngOnInit() {
    this.selectedOption = "Clicks";
    this.series_a = [
      {
        name: "series1",
        data: [22, 20, 18, 3, 4],
      },
      {
        name: "series2",
        data: [10, 30, 10, 13, 14],
      },
      {
        name: "series3",
        data: [12, 10, 10, 9, 2],
      },
    ];

    this.setData();
  }

  setData() {
    this.chartOptions = {
      chart: {
        type: "column",
      },
      title: { text: "Final Grade Prediction" },
      subtitle: {
        text: "Passing rate Prediction [26] Final Grade Prediction [26] Performance prediction [26] Awareness [26], Success Prediction [56, 96], Performance Prediction [100, 117], predictive analytics (proposal) [143], Prediction (A pilot study) [144]",
      },
      tooltip: {
        shared: true,
      },

      xAxis: [
        {
          title: {
            text: "Average grade so far",
          },
          categories: [
            "5",
            "15",
            "25",
            "35",
            "45",
            "55",
            "65",
            "75",
            "85",
            "95",
          ],
          height: 100,
          max: 9,
          lineWidth: 2,
        },
        {
          title: {
            text: "final grade",
          },
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          top: 300,
          max: 9,
          height: 100,
          offset: 0,
          lineWidth: 2,
        },
      ],
      yAxis: [
        {
          title: {
            text: "# students",
          },
          labels: {
            format: "{value}%",
          },
          height: 100,
          max: 25,
          lineWidth: 2,
        },
        {
          title: {
            text: "probability",
          },
          labels: {
            format: "{value}%",
          },
          top: 300,
          max: 100,
          height: 100,
          offset: 0,
          lineWidth: 2,
        },
      ],

      series: [
        {
          data: [10, 0, 5, 0, 5, 5, 10, { y: 25, color: "red" }, 20, 15],
          yAxis: 0,
          xAxis: 0,
          name: "Avg. grade assessments",
        },
        {
          type: "spline",
          data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
          yAxis: 1,
          xAxis: 1,
          name: "Grade prediction",
        },
      ],
    };
  }
}
