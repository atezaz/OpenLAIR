import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-discussion-quality",
  templateUrl: "./discussion-quality.component.html",
  styleUrls: ["./discussion-quality.component.css"],
})
export class DiscussionQualityComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "line",
        polar: true,
      },

      title: {
        text: "Discussion forum quality",
      },
      subtitle: {
        text: "Discussion Contribution Quantity & Quality [24] Reading analytics [24], Discussion forum quality [27], Discussion Engagements [49], Exploratory dialogue [142], Discourse Analysis [80], Social Network Analysis (Discussion Forum) [88] Discourse Analysis [88]",
      },
      xAxis: {
        categories: ["# comments", "# likes", "# replies"],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },

      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      series: [
        {
          name: "You",
          data: [30, 52, 44],
          pointPlacement: "on",
        },
        {
          name: "Class Average",
          data: [56, 49, 33],
          pointPlacement: "on",
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
