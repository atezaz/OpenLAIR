import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-learning-behaviour",
  templateUrl: "./learning-behaviour.component.html",
  styleUrls: ["./learning-behaviour.component.css"],
})
export class LearningBehaviourComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    this.chartOptions = {
      chart: {
        type: "packedbubble",
        height: "50%",
      },
      title: {
        text: "Learning behavior",
      },
      subtitle: {
        text: "Learning behavior [76]",
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}</b>",
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
          name: "Completing",
          data: [
            {
              name: "User 1",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 2",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 3",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 4",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 5",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 6",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 7",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 8",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 9",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 10",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 11",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 12",
              value: Math.floor(Math.random() * 30),
            },
          ],
        },
        {
          name: "Auditing",
          data: [
            {
              name: "User 13",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 14",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 15",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 16",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 17",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 18",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 19",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 20",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 21",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 22",
              value: Math.floor(Math.random() * 30),
            },
          ],
        },
        {
          name: "Disengaging",
          data: [
            {
              name: "User 23",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 24",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 25",
              value: Math.floor(Math.random() * 30),
            },
          ],
        },
        {
          name: "Sampling",
          data: [
            {
              name: "User 26",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 27",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 28",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 29",
              value: Math.floor(Math.random() * 30),
            },
            {
              name: "User 30",
              value: Math.floor(Math.random() * 30),
            },
          ],
        },
      ],
    };
    HC_exporting(Highcharts);
  }
}
