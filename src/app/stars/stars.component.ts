import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  /*声明rating，用于接收 product组件 传给他的值*/
  @Input()// 导入product组件的 rating 变量
  private rating: number;

  /*编写包含5个星星的数组*/
  private stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.stars = [true, true, true, true, true];
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      // 赋值
      this.stars.push(i > this.rating);
    }
  }

}
