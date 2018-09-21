import { GithubService } from './../services/github.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent {
  @Input()
  repositories: any[];

  @Output()
  addToFavEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  searchResultsEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  clearedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private github: GithubService) {}

  cleared() {
    this.clearedEvent.emit();
  }

  search(text) {
    this.github.searchPublicRepositories(text).subscribe(data => {
      this.searchResultsEvent.emit(data.data.search.nodes);
    });
  }

  addToFav(repo) {
    this.addToFavEvent.emit(repo);
  }
}
