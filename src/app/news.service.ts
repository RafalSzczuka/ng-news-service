import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('1'),
    new NewsData('2'),
    new NewsData('3')
  ];

  getNewsList(): NewsData[] {
    return this.news.slice();
  }

  removeItem(index: number) {
    this.news.splice(index, 1);
    this.onChange.emit();
  }

  addItem(title: string) {
    this.news.push(new NewsData(title));
    this.onChange.emit();
  }
}
