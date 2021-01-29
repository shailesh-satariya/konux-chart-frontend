import axios, {AxiosResponse} from "axios";
import {Point} from "../types";

const apiUrl: string = process.env.REACT_APP_API_URL as string;

export const fetchPoints = (): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}/data`);
};

export const addPoint = (point: Point): Promise<AxiosResponse> => {
    return axios.post(`${apiUrl}/point`, {
        data: point,
    });
};
