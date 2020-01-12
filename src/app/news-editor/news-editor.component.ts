import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  createdTitle: string;

  @Output()
  onAdd = new EventEmitter<string>();

  ngOnInit() {
    this.createdTitle = '';
  }

  addNews() {
    if(this.createdTitle) {
      this.onAdd.emit(this.createdTitle);
      // this.createdTitle = '';
    }
  }

}
