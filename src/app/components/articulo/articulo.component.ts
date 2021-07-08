import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ArticuloComponent implements OnInit {


  @Input() title?:string;
  @Input() content?:string;
  @Input() img?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
