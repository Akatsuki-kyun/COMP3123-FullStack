import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
/*Angular Tutorial - https://angular.io/tutorial/toh-pt1
You can always import the component symbol from the Angular core library
and annotate the component class with @Component
*/
@Component({
  //is a decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  /*The page no longer displays properly because you changed the
  *hero from a string to an object
  */
  constructor() { }

  ngOnInit() {
  }

}
