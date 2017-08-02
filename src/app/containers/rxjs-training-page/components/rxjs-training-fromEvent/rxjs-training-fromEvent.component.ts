import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/merge';

@Component({
    selector: 'app-rxjs-training-from-event',
    templateUrl: './rxjs-training-fromEvent.component.html',
    styleUrls: ['./rxjs-training-fromEvent.component.css']
})
export class RxjsTrainingFromEventComponent implements OnInit {

    @ViewChild('mm')
    mm: ElementRef;

    @ViewChild('txt')
    txt: ElementRef;

    data$: Observable<string[]>;
    constructor() { }

    ngOnInit() {

        const target = this.mm.nativeElement; // document.getElementById('mm');

        const mouseup = fromEvent(target, 'mouseup');

        const mouseMove = fromEvent(document, 'mousemove');

        const mousedown = fromEvent(target, 'mousedown');

        const mouseDrag = mousedown.flatMap((md: MouseEvent) => {
            const startX = md.offsetX, startY = md.offsetY;
            console.log(startX, '======', startY);
            return mouseMove.map((mm: MouseEvent) => {
                mm.preventDefault();
                console.log(md.offsetY, mm.clientY);
                return {
                    left: mm.clientX - startX,
                    top: mm.clientY - (startY * 2) - 20,
                    target: mm.target
                };
            });
        }).takeUntil(mouseup);


        mouseDrag.subscribe(d => {
            target.style.top = d.top + 'px';
            target.style.left = d.left + 'px';
        });

        this.data$ = of(['1', '2']);

        // const data1$ = of(...['1', '2', '3', '4', ' 5', '6']);
        // const data2$ = Observable.from(['12', '21', '23', '33']);

        // this.data$ = data1$.concat(data2$).toArray();

        // Observable.from([].)
        const enter$ = fromEvent<KeyboardEvent>(this.txt.nativeElement, 'keydown').filter(e => e.keyCode === 13);

        enter$.map(t => this.txt.nativeElement.value)
            .filter(v => v !== '')
            .do((e: string) => {
                // this.data$ = concat<string[]>(this.data$, of(e)).map((array: string[]) => array);
                // console.log(this.data$.toArray());
                // this.data$ = this.data$.mergeMap(e);
               const x$ =  this.data$.map((array) => [e, ...array]).do(v => {
                    console.log(v);
                    this.data$ = of(v);
                });

                x$.subscribe();
                // this.data$.reduce()
                // this.txt.nativeElement.value = '';
            })
            .subscribe(v => {
                console.log('output the value from subscribe => ', v);
            });
    }

}
