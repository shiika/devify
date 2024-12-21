import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article, ArticlePayload } from "../models/article.model";
import { HttpRequestService } from "./http-request.service";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    http = inject(HttpRequestService);

    getArticles(body: ArticlePayload): Observable<Article[]> {
        console.log(body)
        return this.http.getRequest('articles', {
            params: {
                ...body
            }
        })
    }
}