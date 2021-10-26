import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_sankey from "highcharts/modules/sankey";
import HC_depwheel from "highcharts/modules/dependency-wheel";

HC_sankey(Highcharts);
HC_depwheel(Highcharts);
@Component({
  selector: "app-group-participation",
  templateUrl: "./group-participation.component.html",
  styleUrls: ["./group-participation.component.css"],
})
export class GroupParticipationComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    this.chartOptions = {
      title: {
        text: "Group Participation",
      },
      subtitle: {
        text: "Group Participation [30]",
      },
      tooltip: {
        pointFormatter: function () {
          return `<span>${this.weight} content read, ${
            this.weight * 2
          } comments made</span> `;
        },
      },

      series: [
        {
          keys: ["from", "to", "weight"],
          data: [
            ["Group 1", "Group 2", 5],
            ["Group 1", "Group 3", 1],
            ["Group 1", "Group 6", 1],
            ["Group 1", "Group 4", 1],
            ["Group 5", "Group 2", 1],
            ["Group 5", "Group 3", 3],
            ["Group 5", "Group 4", 1],
            ["Group 3", "Group 2", 1],
            ["Group 4", "Group 3", 1],
            ["Group 4", "Group 8", 5],
            ["Group 6", "Group 4", 2],
            ["Group 2", "Group 4", 1],
            ["Group 2", "Group 3", 1],
          ],

          type: "dependencywheel",
          name: "Interaction between Groups",
          dataLabels: {
            color: "#333",
            textPath: {
              enabled: true,
              attributes: {
                dy: 5,
              },
            },
            distance: 10,
          },
          size: "95%",
        },
      ],
    };
  }
}
