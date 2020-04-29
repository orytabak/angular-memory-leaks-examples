import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-leak',
  templateUrl: './timer-leak.component.html',
  styleUrls: ['./timer-leak.component.css']
})
export class TimerLeakComponent implements OnInit {

  public time: Date;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      // if we do not reference a property of the component, only the interval will remain in memory and the component won't.
      // we are making the reference so it will be easier for us to see the memory leak in the devTools
      this.time = new Date();
    }, 1000);
  }

}