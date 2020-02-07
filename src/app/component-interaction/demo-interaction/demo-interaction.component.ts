import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-interaction',
  templateUrl: './demo-interaction.component.html',
  styleUrls: ['./demo-interaction.component.scss']
})
export class DemoInteractionComponent implements OnInit {
  studentArr: {name: string, age: number, classname: string}[] = [
    {name: 'quan', age: 12, classname: '6A'},
    {name: 'tuan', age: 13, classname: '7B'},
    {name: 'long', age: 14, classname: '8C'},
  ]
  constructor() { }
  chosenStudent: {name: string, age: number, classname: string};

  ngOnInit() {
  }
  outputStudentHandler(event): void {
    this.chosenStudent = event
  }
}
