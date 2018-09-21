import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repositories: any[] = [];
  favorites = [];

  addToFav(repo) {
    this.favorites.push(repo);
  }

  searchResults(results) {
    this.repositories = results;
    const favIds = this.favorites.map(repo => repo.id);
    this.repositories.forEach(repo => {
      if (favIds.includes(repo.id)) {
        repo.alreadyFav = true;
      }
    });
  }

  clearRepositories() {
    this.repositories = [];
  }
}
