import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class PostService {
    constructor(private http: Http) {
        console.log('PostService Initialized');
        
    }

    getPosts(idx: number) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts?_start='+ idx +'&_limit=10')
            .map(res => res.json());
    }

}