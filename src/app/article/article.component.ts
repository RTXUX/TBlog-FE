import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {BlogPost} from "../Model/blog-post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  blogPost: BlogPost;

  constructor(private http: HttpClient, private app: AppService, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.getBlogPost();
  }

  getBlogPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get<BlogPost>(this.app.apiBase + "posts/" + id).subscribe(blogPost => this.blogPost = blogPost);
  }

}
