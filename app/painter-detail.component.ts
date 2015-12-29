import {Component} from 'angular2/core'
import {Painter} from './painter'

@Component({
    selector: 'my-painter-detail',
    template: `
        <div *ngIf="painter">
            <h2>{{painter.name}}</h2>
            <div><label>style: </label>{{painter.style}}</div>
            <div><label>examples: </label>{{painter.examples}}</div>
            <div>
                <h3>Edit</h3>
                <label>name: </label>
                <div><input [(ngModel)]="painter.name" placeholder="name"></div>
            </div>
        </div>
    `,
    inputs: ['painter']
})
export class PainterDetailComponent {
    public painter: Painter;
}