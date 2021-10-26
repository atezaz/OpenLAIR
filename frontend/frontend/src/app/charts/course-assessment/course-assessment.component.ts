import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

import HC_networkgraph from "highcharts/modules/networkgraph";

HC_networkgraph(Highcharts);

@Component({
  selector: "app-course-assessment",
  templateUrl: "./course-assessment.component.html",
  styleUrls: ["./course-assessment.component.css"],
})
export class CourseAssessmentComponent implements OnInit {
  chartOptions: {};
  chartOptions2: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.chartOptions = {
      chart: {},
      title: {
        text: "Course Assessment (Student X on Assignment 1)",
      },
      subtitle: {
        text: "Course Assessments [55]",
      },
      plotOptions: {
        networkgraph: {
          layoutAlgorithm: {
            enableSimulation: true,
          },
        },
      },
      series: [
        {
          type: "networkgraph",

          link: {
            width: 3,
          },
          marker: {
            radius: 20,
          },
          dataLabels: {
            enabled: true,
            linkFormat: "",
          },
          data: [
            {
              from: "Conditionals",
              to: "Functions",
            },
            {
              from: "Conditionals",
              to: "Loops",
              color: "red",
              width: 4,
            },
            {
              from: "Conditionals",
              to: "Fundamentals",
              color: "green",
              width: 4,
            },
            {
              from: "Functions",
              to: "File I/O",
            },
            {
              from: "Functions",
              to: "Arrays",
            },
            {
              from: "Loops",
              to: "File I/O",
            },
            {
              from: "Loops",
              to: "Arrays",
            },
          ],
          nodes: [
            {
              id: "Loops",
              color: "red",
            },
            {
              id: "Conditionals",
              color: "orange",
            },
          ],
        },
      ],
    };
    HC_exporting(Highcharts);
    this.chartOptions2 = {
      chart: {
        type: "networkgraph",
      },
      title: {
        text: "Course Assessment (Cohort on Assignment 1)",
      },
      plotOptions: {
        networkgraph: {
          layoutAlgorithm: {
            enableSimulation: true,
          },
        },
      },
      series: [
        {
          type: "networkgraph",
          link: {
            width: 3,
          },
          marker: {
            radius: 20,
          },
          dataLabels: {
            enabled: true,
            linkFormat: "",
          },
          data: [
            {
              from: "Conditionals",
              to: "Functions",
            },
            {
              from: "Conditionals",
              to: "Loops",
              color: "orange",
              width: 4,
            },
            {
              from: "Conditionals",
              to: "Fundamentals",
              color: "green",
              width: 4,
            },
            {
              from: "Functions",
              to: "File I/O",
            },
            {
              from: "Functions",
              to: "Arrays",
            },
            {
              from: "Loops",
              to: "File I/O",
            },
            {
              from: "Loops",
              to: "Arrays",
            },
          ],
          nodes: [
            {
              id: "Loops",
              color: "lightgreen",
            },
            {
              id: "Conditionals",
              color: "green",
            },
          ],
        },
      ],
    };
  }
}
