import {
    ADD_POINT,
    ADD_POINT_SERVER_ERROR,
    ADD_POINT_SUCCESS,
    FETCH_POINTS,
    FETCH_POINTS_SERVER_ERROR,
    FETCH_POINTS_SUCCESS
} from "../../action-types";
import AppStateReducer from "../app-state-reducer";
import {AppState} from "../../../types";

test("returns default initial state of `false` when no action is passed", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {type: undefined});
    expect(newState).toBe(AppState.NO_STATE);
});

test("returns state of `AppState.FETCH_POINTS` upon receiving an action of type `FETCH_POINTS`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {type: FETCH_POINTS});
    expect(newState).toBe(AppState.FETCH_POINTS);
});

test("returns state of `AppState.FETCH_POINTS_SERVER_ERROR` upon receiving an action of type `FETCH_POINTS_SERVER_ERROR`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {type: FETCH_POINTS_SERVER_ERROR});
    expect(newState).toBe(AppState.FETCH_POINTS_SERVER_ERROR);
});

test("returns state of `AppState.FETCH_POINTS_SUCCESS` upon receiving an action of type `FETCH_POINTS_SUCCESS`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {
        type: FETCH_POINTS_SUCCESS, payload: [
            {x: "2021-01-27T07:13:33.742Z", y: 70},
            {
                x: "2021-01-26T07:13:33.743Z",
                y: 97,
            }]
    });
    expect(newState).toBe(AppState.FETCH_POINTS_SUCCESS);
});

test("returns state of `AppState.ADD_POINT` upon receiving an action of type `ADD_POINT`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {type: ADD_POINT});
    expect(newState).toBe(AppState.ADD_POINT);
});

test("returns state of `AppState.ADD_POINT_SERVER_ERROR` upon receiving an action of type `ADD_POINT_SERVER_ERROR`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {type: ADD_POINT_SERVER_ERROR});
    expect(newState).toBe(AppState.ADD_POINT_SERVER_ERROR);
});

test("returns state of `AppState.ADD_POINT_SUCCESS` upon receiving an action of type `ADD_POINT_SUCCESS`", () => {
    const newState = AppStateReducer(AppState.NO_STATE, {
        type: ADD_POINT_SUCCESS, payload: {x: "2021-01-27T07:13:33.742Z", y: 70}
    });
    expect(newState).toBe(AppState.ADD_POINT_SUCCESS);
});