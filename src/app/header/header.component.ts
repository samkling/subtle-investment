import {Component, Input, OnInit} from '@angular/core';
import {PageInfo} from '../blog-posts/PageInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() pageInformation;
  @Input() isPost = false;

  constructor() { }

  ngOnInit() {
  }

}
