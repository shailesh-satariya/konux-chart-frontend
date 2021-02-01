import {combineReducers} from "redux";
import AppStateReducer from "./app-state-reducer";
import PointsReducer from "./points-reducer";
import ServerErrorReducer from "./server-error-reducer";

export default combineReducers({
    appState: AppStateReducer,
    points: PointsReducer,
    serverError: ServerErrorReducer,
});
