import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-gosoft',
    //template : '<h1>{{title}}</h1><h1>{{hero}}</h1>'
    template : '<h1> {{hero.id}} {{hero.title}}</h1>'
})
export class GosoftComponent {
  title = 'gosoft works!!!!!!!!';
  //hero = 'Wonder Women';
  hero: Hero = {id: 1, title: 'wonderwomen'};
  //hero: Hero = new Hero(1, 'WonderMan');
}