import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-course-difficulty",
  templateUrl: "./course-difficulty.component.html",
  styleUrls: ["./course-difficulty.component.css"],
})
export class CourseDifficultyComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "column",
      },
      title: {
        text: "Course difficulty",
      },
      subtitle: {
        text: "Course difficulty [77], Perceived difficulty [133] Self-efficacy [133] Cognitive load [133]",
      },
      xAxis: {
        categories: [
          "Object Oriented Programming",
          "Linear Algebra",
          "Physics",
          "Database Systems",
          "Data Structure",
          "Statistics",
          "Operating Systems",
          "Algorithm Analysis",
          "Programming Fundamentals",
        ],
        crosshair: true,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      yAxis: {
        labels: {
          format: "{value}%",
        },
        min: 0,
        title: {
          text: null,
        },
      },

      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Perceived Negative Impact over GPA",
          data: [17, 25, 0, 4, 5, 27, 31, 10, 32],
        },
        {
          name: "Perceived difficulty",
          data: [0, 28, 4, 4, 8, 32, 33, 17, 12],
        },
      ],
    };
    HC_exporting(Highcharts);
  }
}
