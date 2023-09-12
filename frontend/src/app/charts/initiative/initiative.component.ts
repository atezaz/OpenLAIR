import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import more from "highcharts/highcharts-more";

more(Highcharts);
@Component({
  selector: "app-initiative",
  templateUrl: "./initiative.component.html",
  styleUrls: ["./initiative.component.css"],
})
export class InitiativeComponent implements OnInit {
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
        text: "Initiative",
      },
      subtitle: {
        text: "Productivity = (Initiative + Responsiveness) / Presence [124] Collaboration [124]",
      },
      xAxis: {
        categories: [
          "Initiative",
          "Responsiveness",
          "Presence",
          "Connectedness",
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
          data: [30, 52, 44, 40],
          pointPlacement: "on",
          name: "# posts (discussion, blog, files, pages)",
        },
        {
          data: [10, 22, 24, 30],
          pointPlacement: "on",
          name: "# comments (discussion, blog, files, pages)",
        },
        {
          data: [25, 32, 41, 20],
          pointPlacement: "on",
          name: "# views",
        },
        {
          data: [33, 24, 42, 11],
          pointPlacement: "on",
          name: "# contacts made",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
