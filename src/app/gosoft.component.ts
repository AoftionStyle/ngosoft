import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'app-gosoft',
    //template : '<h1>{{title}}</h1><h1>{{hero}}</h1>'
    //template : '<h1> {{hero.id}} {{hero.title}}</h1>'
    templateUrl : './gosoft.component.html'
    //template : '<h1> {{hero[0]}} </h1>'
    
})
export class GosoftComponent {
  title = 'gosoft works!!!!!!!!';
  //hero = 'Wonder Women';
  heroes = HEROES;
  hero: Hero = new Hero(1, 'WonderMan');

}


