import {
    Component, OnInit, ViewChild, ElementRef,
    ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, OnChanges, SimpleChanges,
    OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
// import 'rxjs/observable/unsubscribe';

import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/merge';



@Component({
    selector: 'app-rxjs-training-from-event',
    templateUrl: './rxjs-training-fromEvent.component.html',
    styleUrls: ['./rxjs-training-fromEvent.component.css'],
})
export class RxjsTrainingFromEventComponent implements OnInit, OnChanges, DoCheck, OnDestroy {



    @ViewChild('mm')
    mm: ElementRef;

    @ViewChild('txt')
    txt: ElementRef;

    keydownSubscription: Subscription;

    current: string;

    data$: Observable<string[]>;
    constructor(private changeRef: ChangeDetectorRef) { }

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

        const data1$ = of(...['1', '2', '3', '4', ' 5', '6']);
        const data2$ = Observable.from(['12', '21', '23', '33']);

        this.data$ = data1$.concat(data2$).toArray();

        // Observable.from([].)
        this.keydownSubscription = fromEvent<KeyboardEvent>(this.txt.nativeElement, 'keydown')
            .filter(e => e.keyCode === 13)
            .map(t => <string>this.txt.nativeElement.value)
            .filter(v => v !== '')
            .subscribe((v) => {
                console.log('output the value from subscribe => ', v);
                this.current = v;
                // 异步方法中给data$属性设置值，需要手动去更新
                this.data$ = this.data$.map((array) => [v, ...array]);
                this.txt.nativeElement.value = '';
                this.changeRef.markForCheck(); // 手动更新
            });
    }

    liCLick(s: string) {
        // 同步方法中，给data$属性设置值，页面能自动update
        console.log('===============================================');
        this.current = s;
        this.data$ = this.data$.map((array) => [s, ...array]);
    }

    ngDoCheck(): void {
        console.log('ngDocheck... from this page..');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges... from this page..');
    }

    ngOnDestroy(): void {
        this.keydownSubscription.unsubscribe();
    }

}
