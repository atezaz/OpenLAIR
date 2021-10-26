import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-learning-progress",
  templateUrl: "./learning-progress.component.html",
  styleUrls: ["./learning-progress.component.css"],
})
export class LearningProgressComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "line",
        zoomType: "xy",
        panning: true,
        panKey: "shift",
      },
      title: {
        text: "Learning Progress",
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
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Amount",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
          name: "# completed videos",
          data: [12, 14, 9, 14, 18, 22, 14, 18, 13, 8, 9, 12],
        },
        {
          name: "# attempted exercises",
          data: [5, 9, 6, 4, 8, 10, 13, 8, 14, 9, 8, 5],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
