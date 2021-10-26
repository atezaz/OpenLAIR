import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isSticky: boolean = false;
  constructor() {}

  ngOnInit() {}
  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 75;
  }

  /*
    When the user presses the download button this function
    writes all the HTML content of the current page into a html file
    The excludeStyle variable sets css properties which should not be seen in the local file to none
  */
  downloadPage() {
    var htmlContent = [document.querySelector("html").innerHTML];
    var excludeStyle = `
    <style>
    .downloadCharts{
      display: none;
    }

    .header {
      display: none;
    }

    .mat-form-field {
      display: none;
    }

    .footer {
      display: block !important;
    }
    
    .backBtn {
      display:none;
    }

    .highcharts-subtitle {
      display:none;
    }
   
    </style>`;
    //add style sheet to the html
    htmlContent = [htmlContent[0].concat(excludeStyle)];
    var bl = new Blob(htmlContent, { type: "text/html" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "Indicator Visualizations.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
  }
}
