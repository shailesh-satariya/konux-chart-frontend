import {RootState} from "../store";

export const getPoints = (state: RootState) => state.points;
export const hasServerError = (state: RootState) => state.serverError;
