import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
const drilldown = require("highcharts/modules/drilldown.js");
drilldown(Highcharts);

@Component({
  selector: "app-clustering",
  templateUrl: "./clustering.component.html",
  styleUrls: ["./clustering.component.css"],
})
export class ClusteringComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "packedbubble",
        height: "50%",
      },
      title: {
        text: "Clustering",
      },
      subtitle: {
        text: "Clustering (educational data mining) [66], Pass-Fail Classification [120] Keystroke analytics [120], Student Classification [113] Video analytics [113], Classifying Student behavior [29]",
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b><br>",
      },
      xAxis: {
        type: "category",
      },
      plotOptions: {
        packedbubble: {
          minSize: "20%",
          maxSize: "100%",
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            filter: {
              property: "y",
              operator: ">",
              value: 15,
            },
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal",
            },
          },
        },
      },
      series: [
        {
          name: "Cluster 1 (High performers)",

          data: [
            {
              name: "User 1",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 2",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 3",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 4",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 5",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 6",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
            {
              name: "User 7",
              value: Math.floor(Math.random() * 30),
              drilldown: "high",
            },
          ],
        },
        {
          name: "Cluster 2 (Average performers)",
          data: [
            {
              name: "User 13",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
            {
              name: "User 14",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
            {
              name: "User 15",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
            {
              name: "User 16",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
            {
              name: "User 17",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
            {
              name: "User 18",
              value: Math.floor(Math.random() * 30),
              drilldown: "avg",
            },
          ],
        },
        {
          name: "Cluster 3 (Low performers)",
          data: [
            {
              name: "User 23",
              value: Math.floor(Math.random() * 30),
              drilldown: "low",
            },
            {
              name: "User 24",
              value: Math.floor(Math.random() * 30),
              drilldown: "low",
            },
            {
              name: "User 25",
              value: Math.floor(Math.random() * 30),
              drilldown: "low",
            },
          ],
        },
      ],

      drilldown: {
        series: [
          {
            name: "High performers",
            id: "high",
            type: "column",
            data: [
              { name: "Time spent on theoretical contents", y: 22 },
              { name: "Time spent on forum", y: 35 },
              { name: "Time spent on practical tasks", y: 32 },
              { name: "Time until task is submitted", y: 25 },
              { name: "# words in forum", y: 21 },
            ],
          },
          {
            name: "Average performers",
            id: "avg",
            type: "column",
            data: [
              { name: "Time spent on theoretical contents", y: 14 },
              { name: "Time spent on forum", y: 25 },
              { name: "Time spent on practical tasks", y: 22 },
              { name: "Time until task is submitted", y: 35 },
              { name: "# words in forum", y: 15 },
            ],
          },
          {
            name: "Low performers",
            id: "low",
            type: "column",
            data: [
              { name: "Time spent on theoretical contents", y: 7 },
              { name: "Time spent on forum", y: 12 },
              { name: "Time spent on practical tasks", y: 10 },
              { name: "Time until task is submitted", y: 50 },
              { name: "# words in forum", y: 8 },
            ],
          },
        ],
      },
    }),
      HC_exporting(Highcharts);
  }
}
