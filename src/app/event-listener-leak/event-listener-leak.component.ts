import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listener-leak',
  templateUrl: './event-listener-leak.component.html',
  styleUrls: ['./event-listener-leak.component.css']
})
export class EventListenerLeakComponent implements OnInit {

  public message = "Dont!";

  constructor() { }

  ngOnInit() {
    document.addEventListener('scroll', () => {
      alert(this.message)
    });
  }

}