import { Component, OnInit } from 'angular2/core';
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
            <li *ngFor="#p of painters"
                [class.selected]="p === selectedPainter"
                (click)="onSelect(p)">
                <span class="badge">{{p.id}}</span> {{p.name}}
            </li>
        </ul>
        <my-painter-detail [painter]="selectedPainter"></my-painter-detail>
    `
})
export class AppComponent {
    public painters: Painter[];
    public selectedPainter: Painter;

    constructor(private _painterService: PainterService) { }

    getPainters(): void {
        this._painterService.getPainters()
            .subscribe(painters => this.painters = painters);
    }

    ngOnInit(): void {
        this.getPainters();
    }

    onSelect(p: Painter): void { this.selectedPainter = p; }
}
