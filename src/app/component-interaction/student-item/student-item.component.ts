import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  // tạo biến hứng dữ liệu thằng cha truyền vô
  @Input() studentItem: {name: string, age: number, classname: string}
  // xuất dữ liệu ra cha
  @Output() studentEmitter = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  // hàm đẩy dữ liệu đi
  chooseStudent(): void {
    this.studentEmitter.emit(this.studentItem)
  }
}
