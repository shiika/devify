import { Component } from '@angular/core';
import { ArticlesComponent } from 'src/app/components/articles/articles.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
