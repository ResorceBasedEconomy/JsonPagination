import { Component, HostListener, Directive, ElementRef } from '@angular/core';
import { PostService } from './services/posts.service';


@Component({
  selector: 'my-app',
  template: `
  
  <post-counter class="counter" [postAmount]="postsLength"></post-counter>
  <user myScrolling class="user" [posts]="posts" (myevent)="getPost($event)"></user>
  <post-preview class="preview" [post]="selectedPost"></post-preview>
  `,
  providers: [PostService]
})
export class AppComponent {
  posts: Post[];
  postsLength: number;
  selectedPost: Post;
  currPostIdx: number;

  constructor(private postService: PostService) {

    this.postService.getPosts(0).subscribe(posts => {
      this.posts = posts;
      this.postsLength = this.posts.length;
      this.currPostIdx = 10;
    })
  }
  getPost(post) {
    this.selectedPost = post;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
  //we'll do some stuff here when the window is scrolled
  let body = document.body,
    html = document.documentElement;

  let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
                       
  if ((window.innerHeight + window.scrollY) >= height-1 && this.posts) {
        // you're at the bottom of the page
      this.postService.getPosts(this.currPostIdx).subscribe(posts => {
      this.posts = this.posts.concat(posts);
      this.postsLength = this.posts.length;
      this.currPostIdx += 10;
      
    })
    }
  
  }
}

interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}