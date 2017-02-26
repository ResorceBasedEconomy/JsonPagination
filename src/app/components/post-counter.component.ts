import { Component, Input } from '@angular/core';


@Component({
     selector: 'post-counter',
     inputs: ['postAmount'],
     template: `<h3>Posts Counter: {{postAmount}}</h3>`,

})

export class PostCounterComponent {

}