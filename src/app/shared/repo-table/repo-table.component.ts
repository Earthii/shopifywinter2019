import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-table',
  templateUrl: 'repo-table.component.html',
  styleUrls: ['repo-table.component.scss']
})
export class RepositoryTableComponent {
  @Input()
  repositories: any[];

  @Input()
  mode = 'empty';

  @Output()
  removeEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  addToFavEvent: EventEmitter<any> = new EventEmitter();

  removeFromFav(repo) {
    this.removeEvent.emit(repo.id);
  }

  addToFav(repo) {
    repo.alreadyFav = true;
    this.addToFavEvent.emit(repo);
  }
}
