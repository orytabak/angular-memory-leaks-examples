import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObservableLeakingComponent } from './observable-leaking/observable-leaking.component';
import { OutOfDomComponent } from './out-of-dom/out-of-dom.component';
import { TimerLeakComponent } from './timer-leak/timer-leak.component';
import { EventListenerLeakComponent } from './event-listener-leak/event-listener-leak.component';
import { ClosureLeakComponent } from './closure-leak/closure-leak.component';
import { ServiceForRootService } from './service-for-root.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ObservableLeakingComponent, OutOfDomComponent, TimerLeakComponent, EventListenerLeakComponent, ClosureLeakComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceForRootService]
})
export class AppModule { }