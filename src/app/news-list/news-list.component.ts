import { Component, OnInit } from '@angular/core';

export class NewsData {
  public id: number;
  public title: string;
  public imageSrc: string;
  public content: string;
}

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private news: string[];

  ngOnInit() {
    this.news = [];
  }

  removeItem(index: number) {
    this.news.splice(index, 1);
  }

  addItem(title: string) {
    this.news.push(title);
  }
}
