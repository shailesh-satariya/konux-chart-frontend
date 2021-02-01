import {mount, ReactWrapper} from "enzyme";
import React from "react";
import {DefaultState, findByTestAttr, storeFactory} from "../../test/utils";
import Main from "../main";
import {Provider} from "react-redux";
import {Store} from "redux";
import {RootState} from "../../redux/store";
import {ActionTypes} from "../../redux/types";
import {TestCase} from "../../types";

const defaultStore: Store<RootState, ActionTypes> = storeFactory({
    ...DefaultState, ...{
        points: [
            {x: "2021-01-27T07:13:33.742Z", y: 70},
            {
                x: "2021-01-26T07:13:33.743Z",
                y: 97,
            },
        ]
    }
});

/**
 * Factory function to create a ShallowWrapper for the Main component.
 * @function setup
 *
 * @param store
 *
 * @return {ReactWrapper}
 */
const setup = (store: Store<RootState, ActionTypes> = defaultStore): ReactWrapper => {
    return mount(
        <Provider store={store}>
            <Main/>
        </Provider>);
};

describe("render", () => {
    const testCases: TestCase[] = [
        {
            name: 'component',
            element: 'component-main'
        },
        {
            name: 'line chart element',
            element: 'line-chart-element'
        },
        {
            name: 'chart input element',
            element: 'chart-input-element'
        },
    ];

    for (const testCase of testCases) {
        test(`renders ${testCase.name} without an error`, () => {
            const wrapper: ReactWrapper = setup();
            const element = findByTestAttr(wrapper, testCase.element);

            expect(element.length).toBe(1);
        });
    }


});

