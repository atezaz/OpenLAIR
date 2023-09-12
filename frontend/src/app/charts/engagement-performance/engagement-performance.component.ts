import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-engagement-performance",
  templateUrl: "./engagement-performance.component.html",
  styleUrls: ["./engagement-performance.component.css"],
})
export class EngagementPerformanceComponent implements OnInit {
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
        text: "Engagement and Performance",
      },
      subtitle: {
        text: "Engagement and Performance [69], Engagement [86]",
      },
      xAxis: {
        categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5"],
      },
      yAxis: {
        min: 0,
        title: {
          text: "Student Participation",
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true,
      },
      plotOptions: {
        column: {
          stacking: "percent",
          dataLabels: {
            enabled: true,
            format: "{y} %",
          },
        },
      },
      series: [
        {
          name: '"Auditors" (Watched video but did not participate)',
          data: [79, 69, 64, 55, 57],
        },
        {
          name: '"Active" (Participated in an assessment this week)',
          data: [11, 13, 10, 17, 12],
        },
        {
          name: '"Qualified" (Grades in 60th percentile in first two weeks)',
          data: [10, 18, 26, 28, 31],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
