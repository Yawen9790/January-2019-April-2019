import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
  // ,
  // inputs: ['some', 'content'],
  // //works!
  // //` ` instead of " " or ' '
  // template:`
  //   fisrt:{{some}}
  //   second:{{content}}
  // `
})

export class FooComponent implements OnInit {
  // some: string;
  // content: string;
  
  constructor() {
  }

  ngOnInit() {
  }

}
