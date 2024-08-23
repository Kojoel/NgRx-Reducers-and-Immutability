import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount, selectCounterRange } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';
import { counterRange, decrement, increment, reset, setCounterValue } from '../states/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  value = 1;
  incrementvalue = 1;
  count$: Observable<number> | undefined;
  counterRange$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
    this.counterRange$ = this.store.select(selectCounterRange);
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  setValue(num : string) {
    this.store.dispatch(setCounterValue({countValue: Number(num)}));
  }

  setCounterRange(event: Event) {
    const element = event.target as HTMLButtonElement;
    this.incrementvalue = parseInt(element.textContent || '');
    this.store.dispatch(counterRange({rangeObject:this.incrementvalue}))
  }
}
