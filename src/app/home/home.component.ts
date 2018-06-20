import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {BlogPost} from "../Model/blog-post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(private http: HttpClient, private app: AppService) {

  }

  getBlogPosts(page = 0) {
    this.http.get<BlogPost[]>(this.app.apiBase + "posts?page=" + page).subscribe(blogPosts => this.blogPosts = blogPosts);
  }

  ngOnInit() {
    this.getBlogPosts();
  }


}
