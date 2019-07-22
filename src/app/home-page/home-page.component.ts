import { Component, OnInit } from '@angular/core';
import {BLOG_POSTS, MAIN_PAGES} from '../blog-posts/BlogPosts';
import {PageInfo} from '../blog-posts/PageInfo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  pageInfo = MAIN_PAGES[0];
  postInfo = BLOG_POSTS;

  constructor() { }

  ngOnInit() {
  }
}
