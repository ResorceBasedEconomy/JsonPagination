import { Component, Input } from '@angular/core';

@Component({
    selector: 'post-preview',
    inputs: ['post'],
    template: `
        <h3 *ngIf="post">Title: <br/>{{post.title}}</h3>
        <h4 *ngIf="post">Body: <br/>{{post.body}}</h4>
        <h4 *ngIf="post">Post ID: {{post.id}}</h4>
        <h4 *ngIf="post">User ID: {{post.userId}}</h4>
      `
})

export class PostPreviewComponent {

}