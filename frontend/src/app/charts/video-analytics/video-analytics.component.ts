import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-video-analytics",
  templateUrl: "./video-analytics.component.html",
  styleUrls: ["./video-analytics.component.css"],
})
export class VideoAnalyticsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    (this.chartOptions = {
      chart: {
        type: "column",
      },

      title: {
        text: "Video analytics",
      },
      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      xAxis: {
        categories: [
          "User 1",
          "User 2",
          "User 3",
          "User 4",
          "User 5",
          "User 6",
          "User 7",
          "User 8",
          "User 9",
          "User 10",
          "User 11",
          "User 12",
        ],
        labels: {
          x: -10,
        },
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: "Amount",
        },
      },

      series: [
        {
          name: "# forward seeks",
          data: [],
        },
        {
          name: "# backward seeks",
          data: [],
        },
        {
          name: "# videos watched",
          data: [],
        },
        {
          name: "# pauses",
          data: [],
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
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    }),
      HC_exporting(Highcharts);
  }
}
