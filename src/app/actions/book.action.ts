import { Action } from '@ngrx/store';
import { Book } from '../models/book';


export const SEARCG = '[Book] Search';
export const SEARCH_COMPLETE = '[Book] Search Complete';
export const LOAD = '[Book] Load';
export const SELECT = '[Book] Select';


export class SearchAction implements Action {
    readonly type = SEARCG;
    constructor(public payload: string) { }
}


export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;

    constructor(public payload: Book[]) { }
}

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload: Book) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: string) { }
}

export type Actions
    = SearchAction
    | SearchCompleteAction
    | LoadAction
    | SelectAction;
