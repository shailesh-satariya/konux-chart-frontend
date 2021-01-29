import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {Point} from "../../types";
import {ADD_POINT, ADD_POINTS, SERVER_ERROR} from "../action-types";
import * as Services from "../../services";

/**
 * Dispatch axios action to fetch points
 * @param dispatch
 *
 * @return Promise
 */
export const fetchPointsDispatch = (dispatch: Dispatch): Promise<any> => {
    const addPointsFn = (points: Point[]): void => {
        dispatch({
            type: ADD_POINTS,
            payload: points
        });
    };

    return Services.fetchPoints().then((response: AxiosResponse) => {
        addPointsFn(response.data);
    }).catch(() => {
        dispatch({type: SERVER_ERROR});
    });
};


/**
 * Dispatch axios action to add a point
 * @param point
 *
 * @return Promise
 */
export const addPointDispatch = (point: Point) => (dispatch: Dispatch): Promise<any> => {
    const addPointFn = (newPoint: Point): void => {
        dispatch({
            type: ADD_POINT,
            payload: newPoint
        });
    };

    return Services.addPoint(point).then(() => {
        addPointFn(point);
    }).catch(() => {
        dispatch({type: SERVER_ERROR});
    });
};

/**
 * Returns Redux Thunk function that dispatches ADD_POINTS action
 *     after axios promise resolves
 * @function fetchPoints
 * @returns {function} - Redux Thunk function.
 */
export const fetchPoints = () => {
    return fetchPointsDispatch;
}

/**
 * Returns Redux Thunk function that dispatches ADD_POINT action
 *     after axios promise resolves
 * @function addPoint
 * @returns {function} - Redux Thunk function.
 */
export const addPoint = (point: Point) => {
    return addPointDispatch(point);
}


