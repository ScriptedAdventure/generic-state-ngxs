import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state: 'stateA' | 'stateB' = 'stateA';

  toggle() {
    this.state = this.state === 'stateA' ? 'stateB' : 'stateA';
  }
}
