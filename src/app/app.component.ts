import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repositories: any[] = [];
  favorites = [];

  constructor(private cookieService: CookieService) {
    if (this.cookieService.get('favorites')) {
      // initialize favorites
      this.favorites = JSON.parse(this.cookieService.get('favorites'));
    }
  }

  addToFav(repo) {
    this.favorites.push(repo);
    // Save changes to cookie
    this.cookieService.set('favorites', JSON.stringify(this.favorites));
  }

  searchResults(results) {
    this.repositories = results;

    const favIds = this.favorites.map(repo => repo.id);

    this.repositories.forEach(repo => {
      // if already fav, set the repo property alreadyFav to true to disable ADD button
      if (favIds.includes(repo.id)) {
        repo.alreadyFav = true;
      }
    });
  }

  clearRepositories() {
    // Clear Repository if search box is empty
    this.repositories = [];
  }

  removeFromFav(repoId) {
    this.favorites = this.favorites.filter(favRepo => {
      if (favRepo.id === repoId) {
        const resetRepo = this.repositories.find(repo => repo.id === repoId);
        if (resetRepo) {
          // If repo to be removed from favorites is in repo results, reset alreadyFav
          resetRepo.alreadyFav = false;
        }
      }
      // return only favorites that don't match the repo ID
      return favRepo.id !== repoId;
    });

    // save changes to cookie
    this.cookieService.set('favorites', JSON.stringify(this.favorites));
  }
}
