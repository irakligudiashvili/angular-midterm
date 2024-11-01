import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  displayArray(arr: any){
    console.log("Array is displayed by Display service" + arr);
  }
}
