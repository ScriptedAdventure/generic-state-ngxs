import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { StateToken, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  SomeSharedAction,
  SomeSharedInterface,
  SOME_SHARED_TOKEN,
} from '../states/some-shared-interface';

@Component({
  selector: 'app-show-state',
  templateUrl: './show-state.component.html',
  styleUrls: ['./show-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowStateComponent implements OnInit {
  state$!: Observable<SomeSharedInterface>;

  constructor(
    @Inject(SOME_SHARED_TOKEN)
    private token: StateToken<SomeSharedInterface>,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.state$ = this.store.select(this.token);
  }

  dispatch() {
    this.store.dispatch(new SomeSharedAction(this.token));
  }
}
