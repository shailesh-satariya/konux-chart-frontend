import moxios from "moxios";
import {Store} from "redux";
import {addPoint, fetchPoints} from "..";

import {ActionTypes} from "../../types";
import {RootState} from "../../store";
import {storeFactory} from "../../../test/utils";
import {Point} from "../../../types";

describe("fetchPoints action creator", () => {
    let store: Store<RootState, ActionTypes>;

    beforeEach(() => {
        moxios.install();
        store = storeFactory();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("adds response points to state", () => {
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

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: [...points],
            });
        });

        return store.dispatch<any>(fetchPoints()).then(() => {
            const newState = store.getState();
            expect(newState.points).toEqual(points);
        });
    });

    describe("updates serverError state to `true`", () => {
        // NOTE: there's currently no way to simulate server nonresponse with moxios
        test("when server returns 4xx status", () => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 404,
                });
            });

            // @ts-ignore
            return (
                store
                    .dispatch<any>(fetchPoints())
                    // @ts-ignore
                    .then(() => {
                        const newState = store.getState();
                        expect(newState.serverError).toBe(true);
                    })
            );
        });

        test("when server returns 5xx status", () => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 500,
                });
            });

            return store.dispatch<any>(fetchPoints()).then(() => {
                const newState = store.getState();
                expect(newState.serverError).toBe(true);
            });
        });
    });
});

describe("addPoint action creator", () => {
    let store: Store<RootState, ActionTypes>;

    beforeEach(() => {
        moxios.install();
        store = storeFactory();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("adds response nextMove to state", () => {
        const point: Point = {x: "2021-01-27T07:13:33.742Z", y: 70};
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
            });
        });

        return store.dispatch<any>(addPoint(point)).then(() => {
            const newState = store.getState();
            expect(newState.points).toEqual([point]);
        });
    });
});
