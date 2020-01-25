import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  createdTitle: string;
  addedUrl: string;
  addedContent: string;
  addedId: number;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.createdTitle = "";
    this.addedUrl = "";
    this.addedContent = "";
    this.addedId = 0;
  }

  addNews() {
    if (this.createdTitle) {
      this.newsService.addItem(
        this.createdTitle,
        this.addedUrl,
        this.addedContent,
        this.addedId
      );
    }
  }
}
