import { Component } from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from '../../services/wikipedia.service';


@Component({
  selector: 'my-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
   providers: [WikipediaService]
})
export class WikiComponent  {

  
  items: Observable<string[]>;

  constructor (private wikipediaService: WikipediaService) {}

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }

}
