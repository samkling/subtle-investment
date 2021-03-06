import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BLOG_POSTS} from '../blog-posts/BlogPosts';
import {PageInfo} from '../blog-posts/PageInfo';

const POSTS = BLOG_POSTS;

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  postId: string;
  pageInfo: PageInfo;

  constructor(private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.postId = id;
    this.pageInfo = this.getPageInfo();
  }

  getPageInfo(): PageInfo {
    let pageInfo = {
      id: '',
      heading: "Post Not Found",
      headerImage: '',
      subHeading: "Invalid Post ID",
      post: "You have tried to find a post that does not exist"
    };

    POSTS.forEach( post => {
      if ( post.id == this.postId ) {
        pageInfo = post;
      }
    });

    return pageInfo;
  }

}
