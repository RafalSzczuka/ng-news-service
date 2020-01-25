export class NewsData {
  public id: number;
  public title: string;
  public content: string;
  public imageUrl: string;

  constructor(title: string, imageUrl: string, content: string, id: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
    this.id = id;
  }
}
