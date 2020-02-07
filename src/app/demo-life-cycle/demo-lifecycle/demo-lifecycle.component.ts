import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit, AfterViewInit, DoCheck {
  num = 0;
  constructor() { }
  @ViewChild('title', {static: true}) title: ElementRef
  ngOnInit() {
    console.log("ngOnInit");
    // setInterval(() => {
    //   this.num++
    // }, 100)
    
    
  }
  changeNumHandler(): void {
      this.num++
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.title.nativeElement.innerHTML);
  }
  ngDoCheck() {
    console.log("num change!")
  }
}
