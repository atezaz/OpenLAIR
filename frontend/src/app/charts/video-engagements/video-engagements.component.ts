import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-video-engagements",
  templateUrl: "./video-engagements.component.html",
  styleUrls: ["./video-engagements.component.css"],
})
export class VideoEngagementsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      title: {
        text: "Video engagements",
      },
      subtitle: {
        text: "Video engagements / analytics [138], Video analytics (Self-reflection) [72], Comment Analytics (Youtube Videos) [116]",
      },
      yAxis: {
        title: {
          text: "Number of Students",
        },
      },
      xAxis: {
        categories: [
          "Video 1",
          "Video 2",
          "Video 3",
          "Video 4",
          "Video 5",
          "Video 6",
          "Video 7",
        ],
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },
      series: [
        {
          name: "Read a summary",
          data: [625, 444, 488, 422, 380, 322, 205],
        },
        {
          name: "Wrote a summary",
          data: [696, 525, 499, 431, 398, 280, 170],
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    }),
      HC_exporting(Highcharts);
  }
}
