import { Component, OnInit } from '@angular/core';

import { BootService } from '../../services/boots.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  typeBoots: any[] = [];
  boots: any[] = [];
  constructor( private _bootservices: BootService   ) { }

  ngOnInit() {this.boots = this._bootservices.getboots();console.log(this.boots);
  }

}
