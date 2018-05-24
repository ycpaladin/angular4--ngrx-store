import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import * as fromCollection from './collection.reducer';
import * as fromLayout from './layout.reducer';
import * as fromSearch from './search.reducer';
// import { createSelector } from 'reselect';

import { environment } from '../../environments/environment';

export interface State {
    search: fromSearch.State;
    books: fromBook.State;
    collection: fromCollection.State;
    layout: fromLayout.State;
}

export const reducer: ActionReducerMap<State> = {
    search: fromSearch.reducer,
    books: fromBook.reducer,
    collection: fromCollection.reducer,
    layout: fromLayout.reducer
};

export const getBooksState = (state: State) => state.books;

export const getBookEntities = createSelector(getBooksState, fromBook.getEntities);
export const getBookIds = createSelector(getBooksState, fromBook.getIds);
export const getSelectedBookId = createSelector(getBooksState, fromBook.getSelectedId);
export const getSelectedBook = createSelector(getBooksState, fromBook.getSelected);


export const getSearchState = (state: State) => state.search;


export const getSearchBookIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);


export const getSearchResults = createSelector(getBookEntities, getSearchBookIds, (books, searchIds) => {
    return searchIds.map(id => books[id]);
});



export const getCollectionState = (state: State) => state.collection;

export const getCollectionLoaded = createSelector(getCollectionState, fromCollection.getLoaded);
export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);

export const getBookCollection = createSelector(getBookEntities, getCollectionBookIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});

export const isSelectedBookInCollection = createSelector(getCollectionBookIds, getSelectedBookId, (ids, selected) => {
    return ids.indexOf(selected) > -1;
});



export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);


