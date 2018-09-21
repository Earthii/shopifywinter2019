import { Component, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.scss']
})
export class SearchBoxComponent {
  @ViewChild('queryText')
  inputField;

  @Output()
  clearedEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  searchEvent: EventEmitter<String> = new EventEmitter<String>();

  keyPressed(event) {
    const searchText: string = this.inputField.nativeElement.value;

    if (searchText !== '' && event.code === 'Enter') {
      this.search(searchText);
    } else if (searchText === '') {
      this.clearedEvent.emit();
    }
  }

  search(text) {
    this.searchEvent.emit(text);
  }
}
