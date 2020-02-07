import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-child',
  templateUrl: './demo-lifecycle-child.component.html',
  styleUrls: ['./demo-lifecycle-child.component.scss']
})
export class DemoLifecycleChildComponent implements OnInit, OnChanges {
  @Input() num: number
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    console.log('thay đổi: ', change)
  }
}
