import {
    ADD_POINT,
    ADD_POINT_SERVER_ERROR,
    ADD_POINT_SUCCESS,
    FETCH_POINTS,
    FETCH_POINTS_SERVER_ERROR,
    FETCH_POINTS_SUCCESS,
    NO_SERVER_ERROR,
    SERVER_ERROR,
} from "../action-types";
import {Point} from "../../types";

interface DefaultAction {
    type: undefined | null;
}

interface AddPointAction {
    type: typeof ADD_POINT;
}

interface AddPointServerErrorAction {
    type: typeof ADD_POINT_SERVER_ERROR;
}

interface AddPointSuccessAction {
    type: typeof ADD_POINT_SUCCESS;
    payload: Point;
}

interface FetchPointsAction {
    type: typeof FETCH_POINTS;
}

interface FetchPointsServerErrorAction {
    type: typeof FETCH_POINTS_SERVER_ERROR;
}

interface FetchPointsSuccessAction {
    type: typeof FETCH_POINTS_SUCCESS;
    payload: Point[];
}

interface ServerError {
    type: typeof SERVER_ERROR;
}

interface NoServerError {
    type: typeof NO_SERVER_ERROR;
}

export type ActionTypes =
    | DefaultAction
    | AddPointAction
    | AddPointServerErrorAction
    | AddPointSuccessAction
    | FetchPointsAction
    | FetchPointsServerErrorAction
    | FetchPointsSuccessAction
    | ServerError
    | NoServerError;
