import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import DateTime, {DateTimeProps} from "../date-time";
import moment, {Moment} from "moment";

const defaultProps: DateTimeProps = {
    label: "Date time",
    value: new Date(),
    onChange: (val: string | Moment) => {
    }
};

/**
 * Factory function to create a ShallowWrapper for the DateTime component.
 * @function setup
 *
 * @param {DateTimeProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: DateTimeProps = defaultProps): ShallowWrapper => {
    return shallow(<DateTime {...props} />);
};

describe("render", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders component without an error", () => {
        const componentDateTime = findByTestAttr(wrapper, "component-date-time");

        expect(componentDateTime.length).toBe(1);
    });

    test("renders label without an error", () => {
        const dateTimeLabel = findByTestAttr(wrapper, "date-time-label");

        expect(dateTimeLabel.length).toBe(1);
    });

    test("renders date time without an error", () => {
        const dateTimeElement = findByTestAttr(wrapper, "date-time-element");

        expect(dateTimeElement.length).toBe(1);
    });
});

test("calls `onChange` prop when date time value is changed", () => {
    const onChangeMock = jest.fn();
    const props: DateTimeProps = {...defaultProps, onChange: onChangeMock};

    const wrapper = setup(props);

    // simulate click on date time on change
    const value: Moment = moment();
    const dateTimeElement = findByTestAttr(wrapper, "date-time-element");
    dateTimeElement.simulate("change", value);

    // expect the mock to have been called once
    expect(onChangeMock).toHaveBeenCalledWith(value);
});

