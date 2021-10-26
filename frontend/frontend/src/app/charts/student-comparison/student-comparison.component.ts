import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-student-comparison",
  templateUrl: "./student-comparison.component.html",
  styleUrls: ["./student-comparison.component.css"],
})
export class StudentComparisonComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  selectedOption: string;
  constructor() {}

  ngOnInit() {
    this.selectedOption = "Clicks";
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        renderTo: "container",
        defaultSeriesType: "spline",
      },
      title: {
        text: "Student comparison",
      },
      subtitle: {
        text: "Student comparison [130] Grade prediction [130] Self-motivation [130], Student performance [126] Student comparison [126], Academic performance [129] Learning strategies [129], Performance [25], Performance [50]",
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
        title: {
          text: this.selectedOption,
        },
      },
      series: [
        { name: "You", data: [10, 20, 30, 20, 10] },
        { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
      ],
    }),
      HC_exporting(Highcharts);
  }

  updateChart(event: any) {
    var selVal = event.target.value;
    if (selVal == "A" || selVal == "") {
      this.chartOptions["series"] = [
        { name: "You", data: [10, 20, 30, 20, 10] },
        { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
      ];
    } else if (selVal == "B") {
      this.chartOptions["series"] = [
        { name: "You", data: [11, 21, 32, 12, 1] },
        { name: "Avg. class data", data: [22, 11, 13, 32, 21] },
      ];
    } else if (selVal == "C") {
      this.chartOptions["series"] = [
        { name: "You", data: [31, 22, 33, 32, 11] },
        { name: "Avg. class data", data: [32, 31, 11, 2, 15] },
      ];
    } else if (selVal == "D") {
      this.chartOptions["series"] = [
        { name: "You", data: [54, 33, 44, 12, 32] },
        { name: "Avg. class data", data: [22, 43, 13, 12, 133] },
      ];
    } else {
      this.chartOptions["series"] = [
        { name: "You", data: [24, 13, 14, 32, 22] },
        { name: "Avg. class data", data: [32, 43, 33, 52, 33] },
      ];
    }
    this.selectedOption =
      event.target.options[event.target.options.selectedIndex].text;
    this.chartOptions["yAxis"]["title"]["text"] = this.selectedOption;
    this.chartOptions = { ...this.chartOptions };
  }
}
