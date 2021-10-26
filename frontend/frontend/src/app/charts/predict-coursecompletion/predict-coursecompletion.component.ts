import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-predict-coursecompletion",
  templateUrl: "./predict-coursecompletion.component.html",
  styleUrls: ["./predict-coursecompletion.component.css"],
})
export class PredictCoursecompletionComponent implements OnInit {
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
        text: "Predict course succesful completion",
      },
      subtitle: {
        text: "Predict course successful completion [70]",
      },
      xAxis: {
        allowDecimals: false,
        title: {
          text: "Activities and Units",
        },
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          },
        },
        accessibility: {
          rangeDescription: "Range: 0 to 43.",
        },
      },
      yAxis: {
        title: {
          text: "Passing Rate",
        },
      },

      tooltip: { enabled: false },
      plotOptions: {
        area: {
          pointStart: 0,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "Forum activities",
          data: [null, 1, 2, 7, 13, 18, 45, 48, 34, 43],
        },
        {
          name: "Passing Rate",
          data: [3, 4, 10, 19, 22, 33, 65, 63, 50, 50],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
