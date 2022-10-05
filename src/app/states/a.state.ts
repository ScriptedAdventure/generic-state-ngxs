import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import {
  SomeSharedAction,
  SomeSharedInterface,
  SomeSharedState,
} from './some-shared-interface';

export interface AStateModel extends SomeSharedInterface {
  propertyA: string;
  propertyB: number;
  propertyC: { test: string }[];
}

export const A_STATE_TOKEN = new StateToken<AStateModel>('A_STATE');

@State<AStateModel>({
  name: A_STATE_TOKEN,
  defaults: {
    propertyA: 'propertyA',
    propertyB: 0,
    propertyC: [
      {
        test: 'A',
      },
    ],
  },
})
@Injectable()
export class AState extends SomeSharedState {
  someSharedAction(ctx: StateContext<AState>, action: SomeSharedAction) {
    console.log('testA', ctx.getState());
  }
}
