import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-predict-exam-success",
  templateUrl: "./predict-exam-success.component.html",
  styleUrls: ["./predict-exam-success.component.css"],
})
export class PredictExamSuccessComponent implements OnInit {
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
        text: "Predict exam success",
      },
      xAxis: {
        categories: [
          "# days of access",
          "# of logins",
          "# hours",
          "# posts viewed",
          "# posts created",
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Frequency",
        },
        plotLines: [
          {
            value: 3,
            width: 1,
            color: "red",
            zIndex: 10,
          },
          {
            value: 6,
            width: 1,
            color: "green",
            zIndex: 10,
          },
        ],
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
          name: "Student 1",
          data: [4, 9, 7, 18, 4],
        },
        {
          name: "Student 2",
          data: [3, 6, 3, 8, 1],
        },
        {
          name: "Student 3",
          data: [3, 2, 1, 2, 1],
        },
      ],
    };
  }
}
