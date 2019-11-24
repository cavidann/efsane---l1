import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l1';

  posts = [
    {id:0, title: 'Efsane', imgSrc: 'red.jpg', likeCount: 10, isLiked: true},
    {id:1, title: 'Tural', imgSrc: 'yellow.jpg', likeCount: 32, isLiked: false},
    {id:2, title: 'Cavidan', imgSrc: '1.jpg', likeCount: 45, isLiked: true},
  ]
}
