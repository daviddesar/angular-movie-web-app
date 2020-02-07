import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ISeat } from "src/app/services/seat";

@Component({
  selector: "app-ghe-item",
  templateUrl: "./ghe-item.component.html",
  styleUrls: ["./ghe-item.component.scss"]
})
export class GheItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  isBooking = false;
  @Input() seatItem: ISeat;
  @Output() seatEmitter = new EventEmitter();
  chooseSeat(): void {
    this.isBooking = !this.isBooking;
    this.seatEmitter.emit(this.seatItem);
  }
}
