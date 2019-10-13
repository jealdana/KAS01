import { Injectable } from '@angular/core';

@Injectable()
export class bootService {
  /* Note: import + providers in file module (~.module.ts) or ignore this message. */
  private typeBoots: any[] = ["Industrial","Casual"];
  private boots: any[] = [
    {name:"a",
    price: 225},
    {name:"a",
    price: 225}
  ];
  constructor(  ){  }
  getboots():any[]{
    return this.boots;
  }
  gettype():any[]{
    return this.typeBoots;
  }
}
