import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-refresh',
  templateUrl: './news-refresh.component.html',
  styleUrls: ['./news-refresh.component.css']
})
export class NewsRefreshComponent {

  constructor(
    private newsService: NewsService
  ) { }

  refresh() {
    this.newsService.onChange.emit();
  }
}
