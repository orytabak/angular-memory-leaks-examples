import { Component, OnInit } from '@angular/core';
import { ServiceForRootService } from '../service-for-root.service';

@Component({
  selector: 'app-closure-leak',
  templateUrl: './closure-leak.component.html',
  styleUrls: ['./closure-leak.component.css']
})
export class ClosureLeakComponent implements OnInit {

  private myData = [];

  constructor(private serviceForRoot: ServiceForRootService) { }

  ngOnInit() {
    console.log('hi')
    this.serviceForRoot.addEvent('click', this.clickHandler.bind(this));
  }

  clickHandler() {
    this.myData.push(Math.random())
  }

}