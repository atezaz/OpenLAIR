import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isSticky: boolean = false;
  element = document.getElementById("header");
  constructor() {}

  ngOnInit() {}


  backToTop() {
    this.element.scrollIntoView({ behavior: "smooth" });
  }

}
