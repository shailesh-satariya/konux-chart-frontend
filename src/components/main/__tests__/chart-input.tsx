import {mount, ReactWrapper} from "enzyme"
import React from "react";
import {Provider} from "react-redux";
import moment, {Moment} from "moment";
import {Store} from "redux";
import {DefaultState, findByTestAttr, storeFactory} from "../../../test/utils";
import {ChartInput} from "../index";
import {RootState} from "../../../redux/store";
import {ActionTypes} from "../../../redux/types";
import {ADD_POINT} from "../../../redux/action-types";
import {AppState} from "../../../types";

const defaultStore: Store<RootState, ActionTypes> = storeFactory();

/**
 * Factory function to create a ShallowWrapper for the ChartInput component.
 * @function setup
 *
 * @return {ReactWrapper}
 */
const setup = (store: Store<RootState, ActionTypes> = defaultStore): ReactWrapper => {
    return mount(
        <Provider store={store}>
            <ChartInput/>
        </Provider>);
};

describe("render", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders component without an error", () => {
        const componentChartInput = findByTestAttr(wrapper, "component-chart-input");

        expect(componentChartInput.length).toBe(1);
    });

    test("renders date time element without an error", () => {
        const dateTimeElement = findByTestAttr(wrapper, "x-date-time-element");

        expect(dateTimeElement.length).toBe(1);
    });

    test("renders input element without an error", () => {
        const inputElement = findByTestAttr(wrapper, "y-input-element");

        expect(inputElement.length).toBe(1);
    });

    test("renders `Submit` button element without an error", () => {
        const submitButtonElement = findByTestAttr(wrapper, "submit-button-element");

        expect(submitButtonElement.length).toBe(1);
    });
});


describe("`addPoint` action creator", () => {
    let wrapper: ReactWrapper;
    let store: Store<RootState, ActionTypes>;

    beforeEach(() => {
        store = defaultStore;
        // Add jest mock spy to watch for store.dispatch method.
        jest.spyOn(store, 'dispatch');
        wrapper = setup(store);
    });

    test("`addPoint` was called by `Submit` button", () => {
        // simulate click on submit button
        const submitButtonElement = findByTestAttr(wrapper, "submit-button-element");
        submitButtonElement.simulate("click");
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});

describe("`Submit` button enabled disabled state", () => {
    test("`Submit` button is disabled when appState is ADD_POINT", () => {
        const store: Store<RootState, ActionTypes> = storeFactory({...DefaultState, ...{appState: AppState.ADD_POINT}});
        const wrapper: ReactWrapper = setup(store);

        store.dispatch({type: ADD_POINT});
        const submitButtonElement = findByTestAttr(wrapper, "submit-button-element");
        expect(submitButtonElement.prop("disabled")).toBeTruthy();
    });

    test("`Submit` button is disabled when appState is ADD_POINT_SERVER_ERROR", () => {
        const store: Store<RootState, ActionTypes> = storeFactory({...DefaultState, ...{appState: AppState.ADD_POINT_SERVER_ERROR}});
        const wrapper: ReactWrapper = setup(store);

        const submitButtonElement = findByTestAttr(wrapper, "submit-button-element");
        expect(submitButtonElement.prop("disabled")).not.toBeTruthy();
    });
});


describe("state controlled input fields", () => {
    let wrapper: ReactWrapper;
    let originalUseState = React.useState;
    const mockSetState: jest.Mock<number> = jest.fn();

    beforeEach(() => {
        mockSetState.mockClear();
        React.useState = jest.fn(() => [5, mockSetState]) as any;
        wrapper = setup();
    });

    afterEach(() => {
        React.useState = originalUseState;
    });

    test("state x updates when x date time element value changes", () => {
        const m: Moment = moment();
        const dateTimeElement = findByTestAttr(wrapper, "x-date-time-element");
        (dateTimeElement.prop("onChange") as Function)(m);
        expect(mockSetState).toHaveBeenCalledWith(m.toDate());
    });

    test("state y updates when input y value changes", () => {
        const n: number = 3;
        const inputElement = findByTestAttr(wrapper, "y-input-element");
        (inputElement.prop("onChange") as Function)(n);
        expect(mockSetState).toHaveBeenCalledWith(n);
    });
});