import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-like',
  templateUrl: './post-like.component.html',
  styleUrls: ['./post-like.component.scss']
})
export class PostLikeComponent implements OnInit {
  @Input() count;
  @Input() likeCond;
  
  constructor() { }

  ngOnInit() {
  }

  likeConditionally(likeCond1) {
    this.likeCond = !this.likeCond;

    if (likeCond1) {
      this.count--;
    } else {
      this.count++;
    }
  }
}
