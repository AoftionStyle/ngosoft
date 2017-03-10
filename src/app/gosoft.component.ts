import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-gosoft',
    //template : '<h1>{{title}}</h1><h1>{{hero}}</h1>'
    //template : '<h1> {{hero.id}} {{hero.title}}</h1>'
    template : `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input value="{{hero.name}}" placeholder="name">
      </div>
    `
})
export class GosoftComponent {
  title = 'gosoft works!!!!!!!!';
  //hero = 'Wonder Women';
  hero: Hero = {id: 1, name: 'wonderwomen'};
  //hero: Hero = new Hero(1, 'WonderMan');
}