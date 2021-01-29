import {Point} from "../../types";
import {ActionTypes} from "../types";
import {ADD_POINT, ADD_POINTS} from "../action-types";

const initialState: Point[] = [];

/**
 * @function PointsReducer
 *
 * @param {boolean} state - State before reducer.
 * @param {ActionTypes} action - Action sent to reducer.
 *
 * @returns {Point[]} - New state.
 */
const PointsReducer = (state: Point[] = initialState, action: ActionTypes): Point[] => {
    switch (action.type) {
        case ADD_POINT:
            return [...state, action.payload]
        case ADD_POINTS:
            return action.payload;
        default:
            return state
    }
};

export default PointsReducer;