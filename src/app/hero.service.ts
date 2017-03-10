import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './HeroContainer';

@Injectable()
export class HeroService{
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            //setTimeout( () => resolve(this.getHeroes()), 5000);
            setTimeout( () => this.resolveABC(resolve), 2000);
        });
    }
    resolveABC(res) {
        res(this.getHeroes());
    }
} 