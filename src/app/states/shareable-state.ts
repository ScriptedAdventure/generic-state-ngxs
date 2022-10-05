import { StateToken } from '@ngxs/store';

export abstract class ShareableState {
  protected token: StateToken<any>;

  constructor() {
    this.token = (this.constructor as any)['NGXS_OPTIONS_META']
      .name as StateToken<any>;
  }

  protected validateToken(token: StateToken<any>) {
    return token === this.token;
  }
}
