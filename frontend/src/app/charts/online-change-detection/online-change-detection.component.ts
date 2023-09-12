import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-online-change-detection",
  templateUrl: "./online-change-detection.component.html",
  styleUrls: ["./online-change-detection.component.css"],
})
export class OnlineChangeDetectionComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "spline",
        animation: Highcharts.SVGElement, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            // set up the updating of the chart every 3 seconds
            var series = this.series[0];
            setInterval(function () {
              var x = new Date().getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 3000);
          },
        },
      },

      time: {
        useUTC: false,
      },
      title: {
        text: "Online Change Detection",
      },
      subtitle: {
        text: "Online change detection [137]",
      },
      accessibility: {
        announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
            if (newPoint) {
              return "New point added. Value: " + newPoint.y;
            }
            return false;
          },
        },
      },
      xAxis: {
        type: "datetime",
        tickPixelInterval: 150,
      },
      yAxis: {
        title: {
          text: "Click Behaviour",
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#808080",
          },
        ],
      },

      tooltip: {
        headerFormat: "<b>{series.name}</b><br/>",
        pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}",
      },

      legend: {
        enabled: false,
      },

      exporting: {
        enabled: false,
      },

      series: [
        {
          name: "Click events",
          data: (function () {
            // generate an array of random data
            var data = [],
              time = new Date().getTime(),
              i;

            for (i = -19; i <= 0; i += 1) {
              data.push({
                x: time + i * 3000,
                y: Math.random() * 10,
              });
            }
            return data;
          })(),
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
