import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { OutOfDomComponent } from './out-of-dom/out-of-dom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  public components: any[];
  public show: any = {};
  public compRefs: OutOfDomComponent[] = [];

  @ViewChildren(OutOfDomComponent) oodComps: QueryList<OutOfDomComponent>;

  constructor() {
    this.components = [
      {id: 'obsLeaking', btnText: 'Observable leaking'},
      {id: 'OODLeaking', btnText: 'Out-of-DOM leak'},
      {id: 'timerLeaking', btnText: 'Timer leak'},
      {id: 'eventLeaking', btnText: 'EventListener leak'},
      {id:'closureLeaking', btnText: 'Closure leak'}
    ];
    for(let component of this.components) {
      this.show[component.id] = false;
    }
  }

  ngAfterViewInit() {
      this.oodComps.changes.subscribe(v => {
        if(v.last) {
          this.compRefs.push(v.last);
        }
      })
  }
}
