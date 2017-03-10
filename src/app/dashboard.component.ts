import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
//   template: `
//    <h1>{{title}}</h1>
//    <nav>
//      <a routerLink="/">Dashboard</a>
//      <a routerLink="/heroes">Heroes</a>
//    </nav>
//    <router-outlet></router-outlet>
//  `
    providers : [HeroService]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}