import { Component, OnInit } from '@angular/core';
import { A_STATE_TOKEN } from '../states/a.state';
import { SOME_SHARED_TOKEN } from '../states/some-shared-interface';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  providers: [
    {
      provide: SOME_SHARED_TOKEN,
      useValue: A_STATE_TOKEN,
    },
  ],
})
export class Page1Component {}
