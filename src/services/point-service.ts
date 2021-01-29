import axios, {AxiosResponse} from "axios";
import {Point} from "../types";

const apiUrl: string = process.env.REACT_APP_API_URL as string;
const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

export const fetchPoints = (): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}/data`);
};

export const addPoint = (point: Point): Promise<AxiosResponse> => {
    return axios.post(`${apiUrl}/points`, {
        data: point,
    }, {headers});
};
