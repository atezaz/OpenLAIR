import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-referance",
  templateUrl: "./referance.component.html",
  styleUrls: ["./referance.component.css"],
})
export class ReferanceComponent implements OnInit {
  element = document.getElementById("header");

  constructor() {}

  ngOnInit() {}

  backToTop() {
    this.element.scrollIntoView({ behavior: "smooth" });
  }
}
