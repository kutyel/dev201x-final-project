import {Painter} from './painter'
import {PAINTERS} from './mock-painters'
import {Injectable} from 'angular2/core'

@Injectable()
export class PainterService {
    getPainters() {
        return Promise.resolve(PAINTERS);
    }
    
    getLaggedPainters() {
        return new Promise<Painter[]>(resolve =>
            setTimeout(() => resolve(PAINTERS), 2000)
        );
    }
}