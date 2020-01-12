import {
  Component, OnInit, Input,
  EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()
  public data: string;

  @Output()
  public onRemove
    = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }

}
