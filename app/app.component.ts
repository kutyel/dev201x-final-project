import {Component} from 'angular2/core'

interface Painter {
    name: string;
    style: string;
    examples: string[];
}

@Component({
    selector: 'my-app',
    template: `
        <h1><img class="logoImg" src="img/brush.png" /> Famous painters</h1>
        <h2>{{painter.name}}</h2>
        <div><label>style: </label>{{painter.style}}</div>
        <div><label>examples: </label>{{painter.examples}}</div>
        <div>
            <h3>Edit</h3>
            <label>name: </label>
            <div><input [(ngModel)]="painter.name" placeholder="name"></div>
        </div>
    `
})
export class AppComponent {
    public painter: Painter = {
        name: 'Michelangelo',
        style: 'Renaissance',
        examples: ['David', 'Sistine Chapel', 'The Last Judgement']
    };
}