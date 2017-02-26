import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
    selector: 'user',
    inputs: ['posts'],
    outputs: ['myevent'],
    template: `

  <h3>Posts</h3>
  <div *ngFor="let post of posts">
    <p (click)="postToDisplay(post)">{{post.id}}. {{post.title}}</p>
  </div>
  `,
  
})
export class UserComponent {
    public myevent: EventEmitter = new EventEmitter();  
    constructor() {

    }
    postToDisplay(post) {
       this.myevent.next(post);
    }
}


// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }