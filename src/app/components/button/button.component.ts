import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  @Input() content:string="I am Button";
  @Input() icon?:  string;
  @Input() aling: string ="start";
  @Input() bgcolor:string = "";
  @Input() hovercolor:string="";
  @Input() border:string=`2px solid ${this.bgcolor}`;
  @Input() colorletter:string='white';
  @Input() pd:string='0';
  @Input() space:string="0";

  private color:string="";
  private colorover:string="";

  constructor() { }

  ngOnInit(): void {
  }

  hover(){
    this.color=this.bgcolor;
    this.bgcolor=this.hovercolor;
    this.border=`2px solid ${this.bgcolor}`;
    this.colorover=this.colorletter;
    this.colorletter="white";
  }

  outhover(){
    this.bgcolor=this.color;
    this.border=`2px solid ${this.bgcolor}`;
    this.colorletter=this.colorover;
  }



}
