import {Component, OnInit} from 'angular2/core'
import {Painter} from './painter'
import {PainterDetailComponent} from './painter-detail.component'
import {PainterService} from './painter.service'

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
        <my-painter-detail [painter]="selectedPainter"></my-painter-detail>
    `,
    directives: [PainterDetailComponent],
    providers: [PainterService]
})
export class AppComponent {    
    public painters: Painter[];    
    public selectedPainter: Painter;
    
    constructor(private _painterService: PainterService) { }
    
    getPainters() {
        this._painterService.getPainters().then(p => this.painters = p);
    }
    
    ngOnInit() {
        this.getPainters();
    }
    
    onSelect(p: Painter) { this.selectedPainter = p; }
}
