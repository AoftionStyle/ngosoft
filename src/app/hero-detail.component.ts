import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  providers: [HeroService]
})
export class HeroDetailComponent {
  @Input() selectedHEro: Hero;
  constructor(private heroService: HeroService) { }
}
