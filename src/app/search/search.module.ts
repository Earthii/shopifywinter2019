import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchComponent } from './search.component';

import { GithubService } from './../services/github.service';

@NgModule({
  imports: [SharedModule],
  declarations: [SearchComponent, SearchBoxComponent],
  exports: [SearchComponent, SearchBoxComponent],
  providers: [GithubService]
})
export class SearchModule {}
