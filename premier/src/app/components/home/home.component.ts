import { Component } from "@angular/core";
import { KeywordService } from "../../services/keyword-service.service";
import { ArticleService } from "../../services/article-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  formattedKeywordSets: string[] = [];
  articleData: any[] = [];

  constructor(private keywordService: KeywordService, private articleService: ArticleService) { }

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    this.keywordService.search(this.searchQuery).subscribe(
      response => {
        console.log(response);
        this.formattedKeywordSets = response.keywordSets.map(
          (set: { keywords: string[] }) => set.keywords.map(keyword => `"${keyword}"`).join(' ')
        );
      },
      error => {
        console.error('Search error:', error);
      }
    );
  }

  onKeywordClick(keyword: string) {
    console.log('Keyword clicked:', keyword);
    this.articleService.fetch(keyword).subscribe(
      response => {
        console.log(response);
        this.articleData = response;
      },
      error => {
        console.error('Search error:', error);
      }
    );
  }
}
