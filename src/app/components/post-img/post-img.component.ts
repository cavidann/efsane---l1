import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class PostImgComponent implements OnInit {
  @Input() imgSrc;
  @Input() imgAlt;

  constructor() { }

  ngOnInit() {
  }

}
