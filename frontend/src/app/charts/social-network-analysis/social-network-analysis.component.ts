import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

import HC_networkgraph from "highcharts/modules/networkgraph";
//import nodeFormatter from "./nodeformatter";
HC_networkgraph(Highcharts);
nodeFormatter(Highcharts);
@Component({
  selector: "app-social-network-analysis",
  templateUrl: "./social-network-analysis.component.html",
  styleUrls: ["./social-network-analysis.component.css"],
})
export class SocialNetworkAnalysisComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData() {
    (this.chartOptions = {
      chart: {
        type: "networkgraph",
      },
      title: {
        text: "Social Network Analysis",
      },
      subtitle: {
        text: "Long Term Engagement [90] Social Network Analysis [90], Online Discussion (forum) Behavior [52]",
      },
      plotOptions: {
        networkgraph: {
          keys: ["from", "to"],
          layoutAlgorithm: {
            enableSimulation: true,
            friction: -0.9,
          },
        },
      },
      series: [
        {
          type: "networkgraph",
          dataLabels: {
            enabled: true,
            linkFormat: "",
          },
          id: "lang-tree",
          data: [
            ["User 1", "User 2"],
            ["User 1", "User 3"],
            ["User 1", "User 4"],
            ["User 1", "User 5"],
            ["User 1", "User 6"],
            ["User 1", "User 7"],
            ["User 1", "User 9"],
            ["User 5", "User 16"],
            ["User 3", "User 17"],
            ["User 3", "User 18"],
          ],
        },
      ],
      tooltip: {
        enabled: true,
        useHTML: true,
        formatter: function () {
          let linkTo_li = "";
          let tooltipHTML = "";

          for (let i = 0; i < this.point.linksFrom.length; i++) {
            linkTo_li = linkTo_li + `<li>${this.point.linksFrom[i].to}</li>`;
          }

          tooltipHTML =
            tooltipHTML +
            `<b>Replies to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
          return tooltipHTML;
        },
      },
    }),
      HC_exporting(Highcharts);
  }
}



function nodeFormatter(Highcharts) {
  // Add the nodes option through an event call. We want to start with the parent
 // item and apply separate colors to each child element, then the same color to
 // grandchildren.
 Highcharts.addEvent(
   Highcharts.Series,
   'afterSetOptions',
   function(e) {
     var colors = Highcharts.getOptions().colors,
       i = 0,
       nodes = {};
 
     if (
       this instanceof Highcharts.seriesTypes.networkgraph &&
       e.options.id === 'lang-tree'
     ) {
       e.options.data.forEach(function(link) {
 
         if (link[0] === 'User 1') {
           nodes['User 1'] = {
             id: 'User 1',
             marker: {
               radius: 20
             }
           };
           nodes[link[1]] = {
             id: link[1],
             marker: {
               radius: 10
             },
             color: colors[i++]
           };
         } else if (nodes[link[0]] && nodes[link[0]].color) {
           nodes[link[1]] = {
             id: link[1],
             color: nodes[link[0]].color,
           };
         }
       });
 
       e.options.nodes = Object.keys(nodes).map(function(id) {
         return nodes[id];
       });
     }
   }
 );
 }