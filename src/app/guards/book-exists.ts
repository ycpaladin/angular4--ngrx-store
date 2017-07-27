import { CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
export class BookExistsGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot) : Observable<boolean>{
        return of(true);
    }
}