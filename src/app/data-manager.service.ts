import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private tbian: string[]=[];
//  private url ="...";

  constructor() { }

  getTbian(){
    return this.tbian;
    //return this.http.get<XX[]>(`${this.url}/XX`);
  }
}
