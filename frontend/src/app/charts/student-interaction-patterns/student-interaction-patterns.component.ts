import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-student-interaction-patterns",
  templateUrl: "./student-interaction-patterns.component.html",
  styleUrls: ["./student-interaction-patterns.component.css"],
})
export class StudentInteractionPatternsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();

    //Option to allow export of chart
  }
  setData() {
    this.chartOptions = {
      chart: {
        //  polar: true,
        type: "area",
      },
      title: {
        text: "Student interaction patterns",
      },
      subtitle: {
        text: "Student interaction patterns (Relation to performance) [127], Student Interaction Patterns [121]",
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "Number of Interactions",
        },
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      series: [
        {
          name: "# student visits",
          data: [66, 72, 80, 55, 43, 52, 39, 26, 22, 48, 70, 80],
        },
        {
          name: "# discussion forum views",
          data: [62, 60, 72, 51, 30, 59, 42, 20, 14, 30, 54, 60],
        },
        {
          name: "# content views",
          data: [88, 68, 60, 40, 15, 33, 68, 50, 13, 22, 44, 58],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    };
    HC_exporting(Highcharts);
  }
}
