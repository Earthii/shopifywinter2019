import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: 'search-results.component.html',
  styleUrls: ['search-results.component.scss']
})
export class SearchResultsComponent {
  @Input()
  repositories: any[];

  @Output()
  addToFavEvent: EventEmitter<any> = new EventEmitter();

  addToFav(repo) {
    repo.alreadyFav = true;
    this.addToFavEvent.emit(repo);
  }
}
