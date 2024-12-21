import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { debounceTime, distinctUntilChanged, finalize, take } from 'rxjs';
import { Article, ArticlePayload } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { EmptyStateComponent } from 'src/app/shared/components/empty-state/empty-state.component';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgFor, ArticleCardComponent, NgIf, NgxSkeletonLoaderModule, EmptyStateComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  loaders: {[key: string]: boolean} = {};
  pageSize: number = 9;
  pageNo: WritableSignal<number> = signal(1);
  searchTerm: WritableSignal<string> = signal('');
  totalCount: number = 0;
  fb: FormBuilder = inject(FormBuilder);

  searchControl: FormControl = new FormControl('');
  articleService = inject(ArticleService);

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loadArticles();
    this.loadOnSearch();
  }

  loadMore() {
    this.pageNo.update(state => state + 1);
    this.loadArticles(true);
  }

  private loadOnSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => {
        this.searchTerm.set(value);
        this.pageNo.set(0);
        this.loadArticles();
      });
  }

  loadArticles(isMore: boolean = false) {
    this.loaders[isMore ? "more" : "articles"] = true;
    const body: ArticlePayload = {
      page: this.pageNo(),
      per_page: this.pageSize,
      // term: this.searchTerm()
    }
    this.articleService.getArticles(body)
    .pipe(
      take(1),
      finalize(() => (this.loaders[isMore ? "more" : "articles"] = false))
    )
    .subscribe((articles) => {
      this.articles = [...this.articles, ...articles];
    });
  }
}
