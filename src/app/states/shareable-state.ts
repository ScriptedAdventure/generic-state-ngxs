import { StateToken } from '@ngxs/store';

export abstract class ShareableState<T = any> {
  protected token: StateToken<T>;

  constructor() {
    this.token = (this.constructor as any)['NGXS_OPTIONS_META']
      .name as StateToken<T>;
  }

  protected validateToken(token: StateToken<any>) {
    return token === this.token;
  }
}
