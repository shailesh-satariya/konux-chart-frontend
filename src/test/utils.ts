import {ReactWrapper, ShallowWrapper} from "enzyme";
import {applyMiddleware, createStore, Store} from "redux";
import {ActionTypes} from "../redux/types";

import rootReducer from "../redux/reducers";
import {middlewares, RootState} from "../redux/store";
import {AppState} from "../types";

/**
 * Default root state
 */
export const DefaultState: RootState = {
    appState: AppState.NO_STATE,
    points: [],
    serverError: false
};

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 *
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState: RootState = DefaultState): Store<RootState, ActionTypes> => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ReactWrapper | ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 *
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ReactWrapper | ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
}
