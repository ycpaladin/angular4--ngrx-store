// import { createSelector } from 'reselect';
import { Book } from '../models/book';
import * as book from '../actions/book.action';
import * as collection from '../actions/collection.action';
import { createSelector } from '@ngrx/store';

export interface State {
    ids: string[];
    entities: {
        [id: string]: Book
    };
    selectedBookId: string | null;
}


export const initialState: State = {
    ids: [],
    entities: {},
    selectedBookId: null
};

export function reducer(state: State = initialState, action: book.Actions | collection.Actions): State {

    switch (action.type) {
        case book.SEARCH_COMPLETE:
        case collection.LOAD_SUCCESS: {
            const books = action.payload;
            const newBooks = books.filter(b => !state.entities[b.id]);

            const newBookIds = newBooks.map(b => b.id);
            const newBookEntities = newBooks.reduce((entities: { [id: string]: Book }, b: Book) => {
                return Object.assign(entities, { [b.id]: book });
            }, {});

            return {
                ids: [...state.ids, ...newBookIds],
                entities: Object.assign({}, state.entities, newBookEntities),
                selectedBookId: state.selectedBookId
            };
        }
        case book.LOAD: {
            const b = action.payload;

            if (state.ids.indexOf(b.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, b.id],
                entities: Object.assign({}, state.entities, {
                    [b.id]: book
                }),
                selectedBookId: state.selectedBookId
            };
        }

        case book.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedBookId: action.payload
            };
        }
        default:
            return state;
    }
}


export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedBookId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
