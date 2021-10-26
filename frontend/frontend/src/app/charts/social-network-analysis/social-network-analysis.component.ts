import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

import HC_networkgraph from "highcharts/modules/networkgraph";
import nodeFormatter from "./nodeFormatter";
HC_networkgraph(Highcharts);
nodeFormatter(Highcharts);
@Component({
  selector: "app-social-network-analysis",
  templateUrl: "./social-network-analysis.component.html",
  styleUrls: ["./social-network-analysis.component.css"],
})
export class SocialNetworkAnalysisComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "networkgraph",
      },
      title: {
        text: "Social Network Analysis",
      },
      subtitle: {
        text: "Long Term Engagement [90] Social Network Analysis [90], Online Discussion (forum) Behavior [52]",
      },
      plotOptions: {
        networkgraph: {
          keys: ["from", "to"],
          layoutAlgorithm: {
            enableSimulation: true,
            friction: -0.9,
          },
        },
      },
      series: [
        {
          type: "networkgraph",
          dataLabels: {
            enabled: true,
            linkFormat: "",
          },
          id: "lang-tree",
          data: [
            ["User 1", "User 2"],
            ["User 1", "User 3"],
            ["User 1", "User 4"],
            ["User 1", "User 5"],
            ["User 1", "User 6"],
            ["User 1", "User 7"],
            ["User 1", "User 9"],
            ["User 5", "User 16"],
            ["User 3", "User 17"],
            ["User 3", "User 18"],
          ],
        },
      ],
      tooltip: {
        enabled: true,
        useHTML: true,
        formatter: function () {
          let linkTo_li = "";
          let tooltipHTML = "";

          for (let i = 0; i < this.point.linksFrom.length; i++) {
            linkTo_li = linkTo_li + `<li>${this.point.linksFrom[i].to}</li>`;
          }

          tooltipHTML =
            tooltipHTML +
            `<b>Replies to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
          return tooltipHTML;
        },
      },
    }),
      HC_exporting(Highcharts);
  }
}
