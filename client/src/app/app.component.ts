import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

  <div class="container">
    <div class="page-header">
        <h1>Planning Poker</h1>
        <p>powered by <a href='https://www.youtube.com/channel/UCtEUltuSON06lg_68cwMe4Q' target="_blank">rickcodetalk</a></p>
    </div>
    <router-outlet></router-outlet>
  </div>

  `
})
export class AppComponent { 

    constructor() {
        
    }
}
