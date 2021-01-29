import moxios from "moxios";
import {AxiosResponse} from "axios";
import {addPoint, fetchPoints} from "../point-service";

describe("fetchPoints and addPoint methods", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("fetchPoints without error", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: [{"x": "2021-01-27T07:13:33.742Z", "y": 70}, {
                    "x": "2021-01-26T07:13:33.743Z",
                    "y": 97
                }, {"x": "2021-01-25T07:13:33.743Z", "y": 20}, {
                    "x": "2021-01-24T07:13:33.743Z",
                    "y": 97
                }, {"x": "2021-01-23T07:13:33.743Z", "y": 75}, {
                    "x": "2021-01-22T07:13:33.743Z",
                    "y": 84
                }, {"x": "2021-01-21T07:13:33.743Z", "y": 86}, {
                    "x": "2021-01-20T07:13:33.743Z",
                    "y": 58
                }, {"x": "2021-01-19T07:13:33.743Z", "y": 18}, {
                    "x": "2021-01-18T07:13:33.743Z",
                    "y": 78
                }, {"x": "2021-01-17T07:13:33.743Z", "y": 9}, {
                    "x": "2021-01-16T07:13:33.743Z",
                    "y": 27
                }, {"x": "2021-01-15T07:13:33.743Z", "y": 67}, {
                    "x": "2021-01-14T07:13:33.743Z",
                    "y": 7
                }, {"x": "2021-01-13T07:13:33.743Z", "y": 87}, {
                    "x": "2021-01-12T07:13:33.743Z",
                    "y": 96
                }, {"x": "2021-01-11T07:13:33.743Z", "y": 2}, {
                    "x": "2021-01-10T07:13:33.743Z",
                    "y": 12
                }, {"x": "2021-01-09T07:13:33.743Z", "y": 77}, {
                    "x": "2021-01-08T07:13:33.743Z",
                    "y": 45
                }, {"x": "2021-01-07T07:13:33.743Z", "y": 55}, {
                    "x": "2021-01-06T07:13:33.743Z",
                    "y": 48
                }, {"x": "2021-01-05T07:13:33.743Z", "y": 79}, {
                    "x": "2021-01-04T07:13:33.743Z",
                    "y": 21
                }, {"x": "2021-01-03T07:13:33.743Z", "y": 48}, {
                    "x": "2021-01-02T07:13:33.743Z",
                    "y": 58
                }, {"x": "2021-01-01T07:13:33.743Z", "y": 75}, {
                    "x": "2020-12-31T07:13:33.743Z",
                    "y": 5
                }, {"x": "2020-12-30T07:13:33.743Z", "y": 66}, {
                    "x": "2020-12-29T07:13:33.743Z",
                    "y": 68
                }, {"x": "2020-12-28T07:13:33.743Z", "y": 62}],
            });
        });

        return fetchPoints().then(
            (response: AxiosResponse) => {
                expect(response.status).toBe(200);
                expect(response.data.length).toBeGreaterThan(1);
            }
        );
    });

    test("addPoint without error", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200
            });
        });

        return addPoint({"x": "2021-01-27T07:13:33.742Z", "y": 70}).then(
            (response: AxiosResponse) => {
                expect(response.status).toBe(200);
            }
        );
    });
});