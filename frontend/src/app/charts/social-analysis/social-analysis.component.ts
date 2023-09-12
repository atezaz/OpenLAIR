import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-social-analysis",
  templateUrl: "./social-analysis.component.html",
  styleUrls: ["./social-analysis.component.css"],
})
export class SocialAnalysisComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "bar",
      },
      title: {
        text: "Social network analysis",
      },
      subtitle: {
        text: "Social Network analysis [63]",
      },
      xAxis: {
        categories: [
          "Student 1",
          "Student 2",
          "Student 3",
          "Student 4",
          "Student 5",
        ],
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of interactions",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },

      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "# emails received on social media",
          data: [10, 12, 3, 20, 2],
        },
        {
          name: "# emails sent on social media",
          data: [13, 15, 7, 4, 6],
        },
        {
          name: "# wall posts received",
          data: [4, 8, 3, 7, 3],
        },
        {
          name: "# status messages posted",
          data: [16, 11, 23, 7, 10],
        },
        {
          name: "# posts written",
          data: [12, 11, 15, 8, 4],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
