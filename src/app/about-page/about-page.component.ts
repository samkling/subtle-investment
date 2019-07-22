import { Component, OnInit } from '@angular/core';
import {BLOG_POSTS, MAIN_PAGES} from '../blog-posts/BlogPosts';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  pageInfo = MAIN_PAGES[1];

  constructor() { }

  ngOnInit() {
  }

}
