import {Component} from 'angular2/core'

interface Painter {
    id: number;
    name: string;
    style: string;
    examples: string[];
}

@Component({
    selector: 'my-app',
    template: `
        <h1><img class="logoImg" src="img/brush.png" /> Famous painters</h1>
        <ul class="painters">
            <li *ngFor="#p of painters"
                [class.selected]="p === selectedPainter"
                (click)="onSelect(p)">
                <span class="badge">{{p.id}}</span> {{p.name}}
            </li>
        </ul>
        <div *ngIf="selectedPainter">
            <h2>{{selectedPainter.name}}</h2>
            <div><label>style: </label>{{selectedPainter.style}}</div>
            <div><label>examples: </label>{{selectedPainter.examples}}</div>
            <div>
                <h3>Edit</h3>
                <label>name: </label>
                <div><input [(ngModel)]="selectedPainter.name" placeholder="name"></div>
            </div>
        </div>
    `
})
export class AppComponent {    
    public painters = PAINTERS;    
    public selectedPainter: Painter;
    
    onSelect(p: Painter) { this.selectedPainter = p; }
}

var PAINTERS: Painter[] = [
    {
        id: 1,
        name: 'Michelangelo',
        style: 'Renaissance',
        examples: ['David', 'Sistine Chapel', 'The Last Judgement']
    },
    {
        id: 2,
        name: 'Raphael',
        style: 'Renaissance',
        examples: ['School at Athens', 'Lucretia', 'Saint George and the Dragon']
    },
    {
        id: 3,
        name: 'Vincent van Gogh',
        style: 'Post-Impressionist',
        examples: ['Self-portrait', 'The Starry Night', 'The Yellow House']
    },
    {
        id: 4,
        name: 'Claude Monet',
        style: 'Impressionist',
        examples: ['Morning on the Seine', 'The Woman in the Green Dress', 'Sunrise']
    },
    {
        id: 5,
        name: 'Johannes Vermeer',
        style: 'Baroque',
        examples: ['The Milkmaid', 'Girl with a Pearl Earring', 'The Music Lesson']
    }
];