import {ADD_POINT_SUCCESS, FETCH_POINTS_SUCCESS} from "../../action-types";
import PointsReducer from "../points-reducer";
import {Point} from "../../../types";

test("returns default initial state of `[]` when no action is passed", () => {
    const newState = PointsReducer([], {type: undefined});
    expect(newState).toEqual([]);
});

test("returns state of array of points upon receiving an action of type `ADD_POINTS`", () => {
    const points: Point[] = [
        {x: "2021-01-27T07:13:33.742Z", y: 70},
        {
            x: "2021-01-26T07:13:33.743Z",
            y: 97,
        },
        {x: "2021-01-25T07:13:33.743Z", y: 20},
        {
            x: "2021-01-24T07:13:33.743Z",
            y: 97,
        },
        {x: "2021-01-23T07:13:33.743Z", y: 75},
        {
            x: "2021-01-22T07:13:33.743Z",
            y: 84,
        },
        {x: "2021-01-21T07:13:33.743Z", y: 86},
        {
            x: "2021-01-20T07:13:33.743Z",
            y: 58,
        },
        {x: "2021-01-19T07:13:33.743Z", y: 18},
        {
            x: "2021-01-18T07:13:33.743Z",
            y: 78,
        },
        {x: "2021-01-17T07:13:33.743Z", y: 9},
        {
            x: "2021-01-16T07:13:33.743Z",
            y: 27,
        },
        {x: "2021-01-15T07:13:33.743Z", y: 67},
        {
            x: "2021-01-14T07:13:33.743Z",
            y: 7,
        },
        {x: "2021-01-13T07:13:33.743Z", y: 87},
        {
            x: "2021-01-12T07:13:33.743Z",
            y: 96,
        },
        {x: "2021-01-11T07:13:33.743Z", y: 2},
        {
            x: "2021-01-10T07:13:33.743Z",
            y: 12,
        },
        {x: "2021-01-09T07:13:33.743Z", y: 77},
        {
            x: "2021-01-08T07:13:33.743Z",
            y: 45,
        },
        {x: "2021-01-07T07:13:33.743Z", y: 55},
        {
            x: "2021-01-06T07:13:33.743Z",
            y: 48,
        },
        {x: "2021-01-05T07:13:33.743Z", y: 79},
        {
            x: "2021-01-04T07:13:33.743Z",
            y: 21,
        },
        {x: "2021-01-03T07:13:33.743Z", y: 48},
        {
            x: "2021-01-02T07:13:33.743Z",
            y: 58,
        },
        {x: "2021-01-01T07:13:33.743Z", y: 75},
        {
            x: "2020-12-31T07:13:33.743Z",
            y: 5,
        },
        {x: "2020-12-30T07:13:33.743Z", y: 66},
        {
            x: "2020-12-29T07:13:33.743Z",
            y: 68,
        },
        {x: "2020-12-28T07:13:33.743Z", y: 62},
    ];
    const newState = PointsReducer([], {
        type: FETCH_POINTS_SUCCESS,
        payload: [...points],
    });
    expect(newState).toEqual(points);
});

test("returns state of array of points upon receiving an action of type `NO_SERVER_ERROR`", () => {
    const point: Point = {x: "2021-01-27T07:13:33.742Z", y: 70};
    const newState = PointsReducer([], {
        type: ADD_POINT_SUCCESS,
        payload: {...point},
    });
    expect(newState).toEqual([point]);
});
