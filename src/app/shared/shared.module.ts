import { RepositoryTableComponent } from './repo-table/repo-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [RepositoryTableComponent],
  exports: [RepositoryTableComponent]
})
export class SharedModule {}
