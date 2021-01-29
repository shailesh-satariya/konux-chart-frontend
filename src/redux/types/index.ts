import {ADD_POINT, ADD_POINTS, NO_SERVER_ERROR, SERVER_ERROR,} from "../action-types";
import {Point} from "../../types";

interface DefaultAction {
    type: undefined | null;
}

interface AddPointAction {
    type: typeof ADD_POINT;
    payload: Point;
}

interface AddPointsAction {
    type: typeof ADD_POINTS;
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
    | AddPointsAction
    | ServerError
    | NoServerError;
