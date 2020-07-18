import { Component, OnInit } from '@angular/core';
import {products} from './produts';

@Component({
  selector: 'grid-plugins',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class MyGridComponent implements OnInit {
  public gridData: any[] = products;
  constructor() { }

  ngOnInit(): void {
  }

}
