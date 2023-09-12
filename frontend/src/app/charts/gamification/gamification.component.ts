import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-gamification",
  templateUrl: "./gamification.component.html",
  styleUrls: ["./gamification.component.css"],
})
export class GamificationComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      title: {
        text: "Gamification",
      },
      subtitle: {
        text: "Gamification [45], Badges earned [43], Game Based Learning [104] Learning Strategy (Game) [104] Predict Performance (Game) [104]",
      },
      xAxis: {
        categories: [
          "Quiz 1",
          "Quiz 2",
          "Quiz 3",
          "Quiz 4",
          "Quiz 5",
          "Quiz 6",
          "Quiz 7",
        ],
      },
      yAxis: {
        title: {
          text: "Points",
        },
      },

      series: [
        {
          type: "area",
          name: "Achieved points",
          data: [93, 72, 100, 64, 78, 90],
        },
        {
          name: "Maximum possible points",
          type: "spline",
          data: [100, 100, 100, 100, 100, 100],
          marker: {
            enabled: false,
          },
          dashStyle: "shortdot",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
