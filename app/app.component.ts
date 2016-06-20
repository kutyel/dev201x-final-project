import { Component, OnInit } from '@angular/core';

import { Painter } from './painter';
import { PainterDetailComponent } from './painter-detail.component';
import { PainterService } from './painter.service';

@Component({
    directives: [PainterDetailComponent],
    providers: [PainterService],
    selector: 'my-app',
    template: `
        <h1><img class="logoImg" src="img/brush.png" /> Famous painters</h1>
        <ul class="painters">
            <li *ngFor="let p of painters"
                [class.selected]="p === selectedPainter"
                (click)="onSelect(p)">
                <span class="badge">{{p.id}}</span> {{p.name}}
            </li>
        </ul>
        <my-painter-detail [painter]="selectedPainter"></my-painter-detail>
    `
})
export class AppComponent implements OnInit {
    public painters: Painter[];
    public selectedPainter: Painter;

    constructor(private service: PainterService) { }

    getPainters(): void {
        this.service.getPainters().then(p => this.painters = p);
    }

    ngOnInit(): void {
        this.getPainters();
    }

    onSelect(p: Painter): void { this.selectedPainter = p; }
}
