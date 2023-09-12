import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
const drilldown = require("highcharts/modules/drilldown.js");
drilldown(Highcharts);
const heatmap = require("highcharts/modules/heatmap.js");
heatmap(Highcharts);
const treemap = require("highcharts/modules/treemap.js");
treemap(Highcharts);
@Component({
  selector: "app-writing-analytics",
  templateUrl: "./writing-analytics.component.html",
  styleUrls: ["./writing-analytics.component.css"],
})
export class WritingAnalyticsComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    this.chartOptions = {
      chart: {
        plotBorderWidth: 1,

        events: {
          drilldown: function (e) {
            let chart = this;
            chart.tooltip.options.enabled = false;
            chart.yAxis[0].update({
              type: "linear",
              categories: false,
            });
          },

          drillup: function (e) {
            let chart = this;

            chart.tooltip.options.enabled = true;
            chart.yAxis[0].update({
              this: "category",
              categories: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
            });
          },
        },
      },
      title: {
        text: "Writing analytics (Group edits per day)",
      },
      subtitle: {
        text: "Writing analytics [61] Collaboration network [61], Writing Engagement [48], Writing Analysis [89] Reflective Writing [89], Affective State [85] Text Analysis [85]",
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "category",
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        title: null,
      },
      colorAxis: {
        min: 0,
        minColor: "#FFFFFF",
        maxColor: Highcharts.getOptions().colors[0],
      },
      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280,
      },
      tooltip: {
        formatter: function () {
          return (
            "The group had " +
            "<b>" +
            this.point.value +
            "</b> edits on <br><b>" +
            this.series.yAxis.categories[this.point.y] +
            "</b>"
          );
        },
      },

      series: [
        {
          type: "heatmap",
          name: "Group Edits",
          borderWidth: 1,
          data: [
            {
              x: 0,
              y: 0,
              name: "Group 1",
              value: 10,
              drilldown: "group1Monday",
            },
            {
              x: 0,
              y: 1,
              name: "Group 1",
              value: 19,
              drilldown: "group1Tuesday",
            },
            {
              x: 0,
              y: 2,
              name: "Group 1",
              value: 8,
              drilldown: "group1Wednesday",
            },
            {
              x: 0,
              y: 3,
              name: "Group 1",
              value: 24,
              drilldown: "group1Thursday",
            },
            {
              x: 0,
              y: 4,
              name: "Group 1",
              value: 67,
              drilldown: "group1Friday",
            },
            {
              x: 1,
              y: 0,
              name: "Group 2",
              value: 92,
              drilldown: "group2Monday",
            },
            {
              x: 1,
              y: 1,
              name: "Group 2",
              value: 58,
              drilldown: "group2Tuesday",
            },
            {
              x: 1,
              y: 2,
              name: "Group 2",
              value: 78,
              drilldown: "group2Wednesday",
            },
            {
              x: 1,
              y: 3,
              name: "Group 2",
              value: 117,
              drilldown: "group2Thursday",
            },
            {
              x: 1,
              y: 4,
              name: "Group 2",
              value: 48,
              drilldown: "group2Friday",
            },
            {
              x: 2,
              y: 0,
              name: "Group 3",
              value: 35,
              drilldown: "group3Monday",
            },
            {
              x: 2,
              y: 1,
              name: "Group 3",
              value: 15,
              drilldown: "group3Tuesday",
            },
            {
              x: 2,
              y: 2,
              name: "Group 3",
              value: 123,
              drilldown: "group3Wednesday",
            },
            {
              x: 2,
              y: 3,
              name: "Group 3",
              value: 64,
              drilldown: "group3Thursday",
            },
            {
              x: 2,
              y: 4,
              name: "Group 3",
              value: 52,
              drilldown: "group3Friday",
            },
            {
              x: 3,
              y: 0,
              name: "Group 4",
              value: 72,
              drilldown: "group4Monday",
            },
            {
              x: 3,
              y: 1,
              name: "Group 4",
              value: 132,
              drilldown: "group4Tuesday",
            },
            {
              x: 3,
              y: 2,
              name: "Group 4",
              value: 116,
              drilldown: "group4Wednesday",
            },
            {
              x: 3,
              y: 3,
              name: "Group 4",
              value: 42,
              drilldown: "group4Thursday",
            },
            {
              x: 3,
              y: 4,
              name: "Group 4",
              value: 88,
              drilldown: "group4Friday",
            },
            {
              x: 4,
              y: 0,
              name: "Group 5",
              value: 38,
              drilldown: "group5Monday",
            },
            {
              x: 4,
              y: 1,
              name: "Group 5",
              value: 35,
              drilldown: "group5Tuesday",
            },
            {
              x: 4,
              y: 2,
              name: "Group 5",
              value: 58,
              drilldown: "group5Wednesday",
            },
            {
              x: 4,
              y: 3,
              name: "Group 5",
              value: 117,
              drilldown: "group5Thursday",
            },
            {
              x: 4,
              y: 4,
              name: "Group 5",
              value: 115,
              drilldown: "group5Friday",
            },
          ],
          dataLabels: {
            enabled: true,
            color: "#000000",
          },
        },
      ],
      drilldown: {
        series: [
          {
            id: "group1Monday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 2,
              },
              {
                name: "Student 2",
                y: 3,
              },
              {
                name: "Student 3",
                y: 5,
              },
            ],
          },
          {
            id: "group1Tuesday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 10,
              },
              {
                name: "Student 2",
                y: 15,
              },
              {
                name: "Student 3",
                y: 23,
              },
            ],
          },
          {
            id: "group1Wednesday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 2,
              },
              {
                name: "Student 2",
                y: 3,
              },
              {
                name: "Student 3",
                y: 3,
              },
            ],
          },
          {
            id: "group1Thursday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 12,
              },
              {
                name: "Student 2",
                y: 6,
              },
              {
                name: "Student 3",
                y: 6,
              },
            ],
          },
          {
            id: "group1Friday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 32,
              },
              {
                name: "Student 2",
                y: 15,
              },
              {
                name: "Student 3",
                y: 20,
              },
            ],
          },
          {
            id: "group2Monday",
            type: "bar",

            data: [
              {
                name: "Student 1",
                y: 55,
              },
              {
                name: "Student 2",
                y: 20,
              },
              {
                name: "Student 3",
                y: 17,
              },
            ],
          },
          {
            id: "group2Tuesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 12,
              },
              {
                name: "Student 2",
                y: 23,
              },
              {
                name: "Student 3",
                y: 22,
              },
            ],
          },
          {
            id: "group2Wednesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 23,
              },
              {
                name: "Student 2",
                y: 25,
              },
              {
                name: "Student 3",
                y: 29,
              },
            ],
          },
          {
            id: "group2Thursday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 68,
              },
              {
                name: "Student 2",
                y: 32,
              },
              {
                name: "Student 3",
                y: 23,
              },
            ],
          },
          {
            id: "group2Friday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 12,
              },
              {
                name: "Student 2",
                y: 20,
              },
              {
                name: "Student 3",
                y: 20,
              },
            ],
          },
          {
            id: "group3Monday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 8,
              },
              {
                name: "Student 2",
                y: 17,
              },
              {
                name: "Student 3",
                y: 10,
              },
            ],
          },
          {
            id: "group3Tuesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 1,
              },
              {
                name: "Student 2",
                y: 4,
              },
              {
                name: "Student 3",
                y: 10,
              },
            ],
          },
          {
            id: "group3Wednesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 55,
              },
              {
                name: "Student 2",
                y: 45,
              },
              {
                name: "Student 3",
                y: 23,
              },
            ],
          },
          {
            id: "group3Thursday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 15,
              },
              {
                name: "Student 2",
                y: 25,
              },
              {
                name: "Student 3",
                y: 14,
              },
            ],
          },
          {
            id: "group3Friday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 30,
              },
              {
                name: "Student 2",
                y: 17,
              },
              {
                name: "Student 3",
                y: 5,
              },
            ],
          },
          {
            id: "group4Monday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 24,
              },
              {
                name: "Student 2",
                y: 24,
              },
              {
                name: "Student 3",
                y: 24,
              },
            ],
          },
          {
            id: "group4Tuesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 30,
              },
              {
                name: "Student 2",
                y: 60,
              },
              {
                name: "Student 3",
                y: 42,
              },
            ],
          },
          {
            id: "group4Wednesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 42,
              },
              {
                name: "Student 2",
                y: 38,
              },
              {
                name: "Student 3",
                y: 34,
              },
            ],
          },
          {
            id: "group4Thursday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 14,
              },
              {
                name: "Student 2",
                y: 14,
              },
              {
                name: "Student 3",
                y: 14,
              },
            ],
          },
          {
            id: "group4Friday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 40,
              },
              {
                name: "Student 2",
                y: 20,
              },
              {
                name: "Student 3",
                y: 28,
              },
            ],
          },
          {
            id: "group5Monday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 15,
              },
              {
                name: "Student 2",
                y: 20,
              },
              {
                name: "Student 3",
                y: 3,
              },
            ],
          },
          {
            id: "group5Tuesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 15,
              },
              {
                name: "Student 2",
                y: 7,
              },
              {
                name: "Student 3",
                y: 13,
              },
            ],
          },
          {
            id: "group5Wednesday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 23,
              },
              {
                name: "Student 2",
                y: 20,
              },
              {
                name: "Student 3",
                y: 15,
              },
            ],
          },
          {
            id: "group5Thursday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 55,
              },
              {
                name: "Student 2",
                y: 45,
              },
              {
                name: "Student 3",
                y: 17,
              },
            ],
          },
          {
            id: "group5Friday",
            type: "bar",
            data: [
              {
                name: "Student 1",
                y: 30,
              },
              {
                name: "Student 2",
                y: 40,
              },
              {
                name: "Student 3",
                y: 45,
              },
            ],
          },
        ],
      },
    };
  }
}
