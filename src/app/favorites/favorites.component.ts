import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.scss']
})
export class FavoritesComponent {
  @Input()
  favorites: any[];

  @Output()
  removeEvent: EventEmitter<any> = new EventEmitter();

  removeFromFav(repo) {
    this.removeEvent.emit(repo.id);
  }
}
