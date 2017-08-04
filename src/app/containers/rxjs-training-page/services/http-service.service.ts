import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// export interface ISubject {
//     id: string;
//     title: string;
//     original_title: string;
//     alt: number;
//     images: any;
//     pubdates: any[];
//     year: number;
//     subtype: string;
// }

// export interface ITheaters {
//     title: string;
//     total: number;
//     start: number;
//     count: number;
//     subjects: ISubject[];
// }

export interface IResult {
    success: boolean;
    data: any;
}

@Injectable()
export class HttpServiceService {

    constructor(private http: Http) { }

    getData(): Observable<IResult> {
        return this.http.get('https://cnodejs.org/api/v1/topics')
            .filter((response: Response) => {
                return response.ok && response.status === 200;
            })
            .map((response: Response) => response.json());
            /*.catch((error) => {
                console.log('error:', error);
                return {
                    error: true,
                    message: error,
                    data: null
                };
            });*/
    }

}
