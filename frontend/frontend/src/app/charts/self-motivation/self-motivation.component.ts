import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import more from "highcharts/highcharts-more";

more(Highcharts);
@Component({
  selector: "app-self-motivation",
  templateUrl: "./self-motivation.component.html",
  styleUrls: ["./self-motivation.component.css"],
})
export class SelfMotivationComponent implements OnInit {
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
        polar: true,
      },
      title: {
        text: "Self-motivation, Self-regulated learning",
      },
      subtitle: {
        text: "Self-motivation [139] Self-regulated Learning [139]",
      },
      xAxis: {
        categories: [
          "#  videos watched",
          "# quizzes",
          "# assignments",
          "# forum activities",
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
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      series: [
        {
          name: "This month",
          data: [30, 52, 44, 40],
          pointPlacement: "on",
        },
        {
          name: "Last month",
          data: [20, 22, 34, 10],
          pointPlacement: "on",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
