import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import {
  SomeSharedAction,
  SomeSharedInterface,
  SomeSharedState,
} from './some-shared-interface';

export interface BStateModel extends SomeSharedInterface {
  propertyC: { test: string }[];
  propertyD: string;
}

export const B_STATE_TOKEN = new StateToken<BStateModel>('B_STATE');

@State<BStateModel>({
  name: B_STATE_TOKEN,
  defaults: {
    propertyC: [
      {
        test: 'B',
      },
    ],
    propertyD: 'propertyD',
  },
})
@Injectable()
export class BState extends SomeSharedState {
  someSharedAction(ctx: StateContext<BState>, action: SomeSharedAction) {
    alert('testB' + JSON.stringify(ctx.getState()));
  }
}
