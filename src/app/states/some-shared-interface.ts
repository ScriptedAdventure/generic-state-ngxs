import { InjectionToken } from '@angular/core';
import { Action, StateContext, StateToken } from '@ngxs/store';
import { ShareableState } from './shareable-state';

export interface SomeSharedInterface {
  propertyC: { test: string }[];
}

export const SOME_SHARED_TOKEN = new InjectionToken<
  StateToken<SomeSharedInterface>
>('SOME_SHARED_TOKEN');

export class SomeSharedAction {
  static readonly type = '[SOME_SHARED_ACTION] Do something';
  constructor(public token: StateToken<any>) {}
}

export abstract class SomeSharedState<T extends SomeSharedInterface> extends ShareableState<T> {
  @Action(SomeSharedAction)
  onSomeSharedAction(
    ctx: StateContext<T>,
    action: SomeSharedAction
  ) {
    if (!this.validateToken(action.token)) {
      return;
    }

    this.someSharedAction(ctx, action);
  }

  abstract someSharedAction(
    ctx: StateContext<T>,
    action: SomeSharedAction
  ): void;
}
