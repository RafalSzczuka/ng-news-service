import {
  Component, OnInit, Input,
  EventEmitter, Output
} from '@angular/core';
import { NewsData } from '../news-data';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  constructor(
    private newsService: NewsService
  ) { }

  remove() {
    this.newsService.removeItem(this.index);
  }
}
