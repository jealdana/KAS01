import { Injectable } from '@angular/core';

@Injectable()
export class BootService {
  /* Note: import + providers in file module (~.module.ts) or ignore this message. */
  private typeBoots: any[] = ["Industrial","Casual"];
  private boots: any[] = [
    {name:"1",
    img:"assets/img/products/1.jpeg",
    price: 225},
    {name:"2",
    img:"assets/img/products/2.jpeg",
    price: 225},
    {name:"3",
    img:"assets/img/products/3.jpeg",
    price: 225},
    {name:"4",
    img:"assets/img/products/4.jpeg",
    price: 225},
    {name:"5",
    img:"assets/img/products/5.jpeg",
    price: 225},
  ];
  constructor(  ){  }
  getboots():any[]{
    return this.boots;
  }
  gettype():any[]{
    return this.typeBoots;
  }
}
