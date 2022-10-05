import { Component, OnInit } from '@angular/core';
import { B_STATE_TOKEN } from '../states/b.state';
import { SOME_SHARED_TOKEN } from '../states/some-shared-interface';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  providers: [
    {
      provide: SOME_SHARED_TOKEN,
      useValue: B_STATE_TOKEN,
    },
  ],
})
export class Page2Component {}
