import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager.service";

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.css']
})
export class DataManagerComponent implements OnInit {

  constructor(private m: DataManagerService) { }

  tbian: string[];
  
  ngOnInit() {
    this.tbian = this.m.getTbian();
  }

}
