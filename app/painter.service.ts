import { Painter } from './painter';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from 'angular2/http';

@Injectable()
export class PainterService {

    private paintersUrl: string = 'app/painters.json';

    constructor(private http: Http) { }

    getPainters(): Observable<Painter[]> {
        return this.http.get(this.paintersUrl)
            .map((res: Response) => {
                if (res.status < 200 || res.status >= 300) {
                    throw new Error(`Response status: ${res.status}`);
                }
                const body = res.json();
                return body || {};
            })
            .catch((err: any) => {
                const message = err.message || 'Server error';
                console.error(message);
                return Observable.throw(message);
            });
    }
}
