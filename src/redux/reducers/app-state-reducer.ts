import {
    ADD_POINT,
    ADD_POINT_SERVER_ERROR,
    ADD_POINT_SUCCESS,
    FETCH_POINTS,
    FETCH_POINTS_SERVER_ERROR,
    FETCH_POINTS_SUCCESS
} from "../action-types";
import {ActionTypes} from "../types";
import {AppState} from "../../types";

const initialState: AppState = AppState.NO_STATE;

/**
 * @function AppStateReducer
 *
 * @param {AppState} state - State before reducer.
 * @param {ActionTypes} action - Action sent to reducer.
 *
 * @returns {AppState} - New state.
 */
const AppStateReducer = (state: AppState = initialState, action: ActionTypes): AppState => {
    switch (action.type) {
        case FETCH_POINTS:
            return AppState.FETCH_POINTS;
        case FETCH_POINTS_SERVER_ERROR:
            return AppState.FETCH_POINTS_SERVER_ERROR;
        case FETCH_POINTS_SUCCESS:
            return AppState.FETCH_POINTS_SUCCESS;
        case ADD_POINT:
            return AppState.ADD_POINT;
        case ADD_POINT_SERVER_ERROR:
            return AppState.ADD_POINT_SERVER_ERROR;
        case ADD_POINT_SUCCESS:
            return AppState.ADD_POINT_SUCCESS;
        default:
            return state;
    }
};

export default AppStateReducer;
