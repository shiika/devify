import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, EllipsisPipe],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
