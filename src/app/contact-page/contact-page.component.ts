import { Component, OnInit } from '@angular/core';
import {BLOG_POSTS, MAIN_PAGES} from '../blog-posts/BlogPosts';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  pageInfo = MAIN_PAGES[2];

  constructor() { }

  ngOnInit() {
  }

}
