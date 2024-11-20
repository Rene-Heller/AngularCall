import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  testFunction(){
    console.log("hallo welt!")
  }
}
