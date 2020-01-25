import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData(
      "Title one",
      "https://i.picsum.photos/id/116/200/200.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Title two",
      "https://i.picsum.photos/id/827/200/200.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Title three",
      "https://i.picsum.photos/id/400/200/200.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa nec leo posuere efficitur ac sed nunc. Phasellus pharetra.",
      0
    ),
    new NewsData(
      "Last entry title",
      "https://i.picsum.photos/id/511/200/200.jpg",
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
