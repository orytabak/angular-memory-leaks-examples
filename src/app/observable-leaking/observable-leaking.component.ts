import { Component, OnInit } from '@angular/core';
import { Observable, interval, of } from 'rxjs';

@Component({
  selector: 'app-observable-leaking',
  templateUrl: './observable-leaking.component.html',
  styleUrls: ['./observable-leaking.component.css']
})
export class ObservableLeakingComponent implements OnInit {

  public time: number = 0;
  private myObservable$: Observable<number>;

  constructor() { 
    this.myObservable$ = interval(1000);
  }

  ngOnInit() {
    this.myObservable$.subscribe(v => this.time = v)
  }

}