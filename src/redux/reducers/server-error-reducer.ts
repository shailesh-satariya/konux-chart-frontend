import {ADD_POINT_SERVER_ERROR, FETCH_POINTS_SERVER_ERROR, NO_SERVER_ERROR, SERVER_ERROR} from "../action-types";
import {ActionTypes} from "../types";

const initialState: boolean = false;

/**
 * @function ServerErrorReducer
 *
 * @param {boolean} state - State before reducer.
 * @param {ActionTypes} action - Action sent to reducer.
 *
 * @returns {boolean} - New state.
 */
const ServerErrorReducer = (state: boolean = initialState, action: ActionTypes): boolean => {
    switch (action.type) {
        case ADD_POINT_SERVER_ERROR:
        case FETCH_POINTS_SERVER_ERROR:
        case SERVER_ERROR:
            return true;
        case NO_SERVER_ERROR:
            return false;
        default:
            return state;
    }
};

export default ServerErrorReducer;
