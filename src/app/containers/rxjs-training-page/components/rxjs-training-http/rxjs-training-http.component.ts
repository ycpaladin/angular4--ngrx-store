import { Component, OnInit, OnDestroy } from '@angular/core';

import { IResult, HttpServiceService } from '../../services/http-service.service';
import { ISubscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-rxjs-training-http',
    templateUrl: './rxjs-training-http.component.html',
    styleUrls: ['./rxjs-training-http.component.css'],
    providers: [HttpServiceService]
})
export class RxjsTrainingHttpComponent implements OnInit, OnDestroy {


    data$: any[];
    subscription$: ISubscription;

    constructor(private service: HttpServiceService) {
        this.subscription$ = service.getData()
            .filter(r => r.success === true)
            .map(r => r.data)
            .subscribe(value => {
                console.log(value);
                this.data$ = value;
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

}
