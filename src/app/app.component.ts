import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `

})
export class AppComponent {
  title = 'app works!!!!!!!!';
}
