import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foo-inner',
  templateUrl: './foo-inner.component.html',
  styleUrls: ['./foo-inner.component.css']
})
export class FooInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message: string;
}
