import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {

  constructor(private http: HttpClient) {
  }
  public onChange = new EventEmitter();

  private fetchRandomImg(): string {
    const rndNumber = Math.floor(Math.random() * 1000)

    return `https://picsum.photos/200?random${rndNumber}`
  }

  private news: NewsData[] = [
    new NewsData(
      "Title one",
      this.fetchRandomImg(),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Title two",
      this.fetchRandomImg(),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Title three",
      this.fetchRandomImg(),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Last entry title",
      this.fetchRandomImg(),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi est, sollicitudin vitae posuere ac, mattis et ante. Sed sit amet tincidunt mi, et elementum est. Phasellus in placerat nunc. Fusce laoreet mi dolor, a interdum urna consectetur sit amet. Nullam egestas ornare hendrerit. Nunc scelerisque enim blandit venenatis ultricies. Sed ac maximus ipsum. Fusce pulvinar erat vitae mauris ornare, non rhoncus urna tincidunt. Integer ultrices tempus lectus ut venenatis. Maecenas fringilla mattis eros, ut porta augue porttitor a. Mauris et purus mauris. Integer in leo et felis fermentum fringilla ornare sit amet est. Cras augue quam, convallis eget libero vel, malesuada rhoncus velit. Sed fringilla sit amet mauris hendrerit rutrum. Curabitur sed odio sagittis, faucibus risus sed, hendrerit neque. Pellentesque eget urna eget eros facilisis vestibulum.",
      0
    )
  ];

  getNewsList(): NewsData[] {
    this.onChange.emit();
    return this.news.sort((a, b) => b.id - a.id);
  }

  removeItem(index: number) {
    this.news.splice(index, 1);
  }

  addItem(title: string, imageUrl: string, content: string, id: number) {
    this.news.push(new NewsData(title, imageUrl, content, id));
    this.onChange.emit();
  }
}
