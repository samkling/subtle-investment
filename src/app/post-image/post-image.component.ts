import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {
  @Input() srcStr;
  @Input() caption;
  @Input() altText;

  constructor() { }

  ngOnInit() {
  }

}
