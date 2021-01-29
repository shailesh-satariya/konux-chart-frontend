import {combineReducers} from "redux";
import PointsReducer from "./points-reducer";
import ServerErrorReducer from "./server-error-reducer";

export default combineReducers({
    points: PointsReducer,
    serverError: ServerErrorReducer,
});
