import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 定义一个产品数组
  private products: Array<Product>;

  private productImgUrl = 'http://placehold.it/200x100';

  constructor() {
  }

  /*在当前组件实例化时，被调用一次*/
  ngOnInit() {
    this.products = [
      new Product(1, '第1个商品', 1.99, 3.5, '这是一个商品描述1', ['a', '3']),
      new Product(2, '第2个商品', 1.99, 2.5, '这是一个商品描述2', ['a', '3']),
      new Product(3, '第3个商品', 1.99, 1.5, '这是一个商品描述2', ['a', '3']),
      new Product(4, '第4个商品', 1.99, 4.5, '这是一个商品描述2', ['a', '3']),
      new Product(5, '第5个商品', 1.99, 3.0, '这是一个商品描述2', ['a', '3']),
      new Product(6, '第6个商品', 1.99, 1.0, '这是一个商品描述2', ['a', '3']),
    ];
  }

}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<String>) {
  }
}
