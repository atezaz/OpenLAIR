import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import more from "highcharts/highcharts-more";

more(Highcharts);
@Component({
  selector: "app-competency",
  templateUrl: "./competency.component.html",
  styleUrls: ["./competency.component.css"],
})
export class CompetencyComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  // time watching videos
  // time on platform
  // # videos accessed
  // # forum visits
  // # sessions per week
  // # questions attempted
  // % of time spent on videos
  // % of time spent on quizzes
  // avg. time on platform per week
  // # visited video lectures
  // # forum contributions

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "line",
        polar: true,
      },

      title: {
        text: "Competency",
      },
      subtitle: {
        text: "Metacognitive Awareness [31] Competency [31], Self regulation [46] Learning strategies [46] predict performance [46] procrastination [46], Predict performance (by self-regulation metrics) [98] Self-Regulated Learning [98] ",
      },
      xAxis: {
        categories: [
          "# forum contributions",
          "# visited video lectures",
          "# questions attempted",
          "% of time spent on quizzes",
          "avg. time on platform per week",
        ],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },

      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      series: [
        {
          name: "You",
          data: [30, 52, 44, 40, 22],
          pointPlacement: "on",
        },
        {
          name: "Average graduate last week",
          data: [23, 41, 50, 44, 29],
          pointPlacement: "on",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
