import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-curriculum-usage",
  templateUrl: "./curriculum-usage.component.html",
  styleUrls: ["./curriculum-usage.component.css"],
})
export class CurriculumUsageComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "scatter",
        zoomType: "xy",
      },
      title: {
        text: "Teacher curriculum usage",
      },
      subtitle: {
        text: "Teacher curriculum usage [65] Curriculum Planning / designing [65], Content quality [58]",
      },
      xAxis: {
        title: {
          enabled: true,
          text: "Proportion of days visited",
        },
        startOnTick: true,
        endOnTick: true,
        min: 0,
        max: 1,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: "Total visits (log_10)",
        },
        max: 1000,
      },

      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: false,
                lineColor: "rgb(100,100,100)",
              },
            },
          },
          states: {
            hover: {
              marker: {
                enabled: false,
              },
            },
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: "Teacher",
          color: "rgba(119, 152, 191, .8)",
          data: [
            [0, 7],
            [0, 9],
            [0.05, 100],
            [0.05, 130],
            [0.05, 170],
            [0.05, 320],
            [0.05, 440],
            [0.05, 620],
            [0.06, 940],
            [0.07, 150],
            [0.07, 600],
            [0.07, 660],
            [0.07, 630],
            [0.07, 720],
            [0.07, 800],
            [0.07, 870],
            [0.08, 820],
            [0.08, 680],
            [0.08, 780],
            [0.08, 920],
            [0.08, 880],
            [0.08, 980],
            [0.09, 1000],
            [0.09, 900],
            [0.09, 940],
            [0.09, 960],
            [0.09, 880],
            [0.09, 830],
            [0.06, 200],
            [0, 500],
            [0.02, 700],
            [0.03, 800],
            [0.04, 1000],
            [0.1, 100],
            [0.1, 700],
            [0.1, 660],
            [0.1, 803],
            [0.1, 740],
            [0.1, 890],
            [0.1, 900],
            [0.1, 950],
            [0.12, 250],
            [0.12, 750],
            [0.12, 800],
            [0.12, 910],
            [0.12, 690],
            [0.15, 903],
            [0.15, 850],
            [0.15, 820],
            [0.15, 720],
            [0.15, 680],
            [0.15, 880],
            [0, 100],
            [0.25, 140],
            [0.5, 700],
            [0.5, 300],
            [0.5, 500],
            [0.6, 620],
            [0.6, 820],
            [0.75, 200],
            [1, 150],
            [1, 220],
            [1, 300],
            [1, 420],
            [1, 550],
            [1, 800],
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
