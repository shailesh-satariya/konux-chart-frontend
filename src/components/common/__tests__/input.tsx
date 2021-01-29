import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import Input, {InputPops} from "../input";

const defaultProps: InputPops = {
    label: "Number",
    value: 6,
    type: "number",
    onChange: (val: string) => {
    }
};

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 *
 * @param {InputPops} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: InputPops = defaultProps): ShallowWrapper => {
    return shallow(<Input {...props} />);
};

describe("render", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders component without an error", () => {
        const componentInput = findByTestAttr(wrapper, "component-input");

        expect(componentInput.length).toBe(1);
    });

    test("renders label without an error", () => {
        const inputLabel = findByTestAttr(wrapper, "input-label");

        expect(inputLabel.length).toBe(1);
    });

    test("renders input without an error", () => {
        const inputElement = findByTestAttr(wrapper, "input-element");

        expect(inputElement.length).toBe(1);
    });
});

test("calls `onChange` prop when input value is changed", () => {
    const onChangeMock = jest.fn();
    const props: InputPops = {...defaultProps, onChange: onChangeMock};

    const wrapper = setup(props);

    // simulate click on input on change
    const value: string = "8";
    const inoutElement = findByTestAttr(wrapper, "input-element");
    const event: React.ChangeEvent<HTMLInputElement> = {target: {value: `${value}`}} as React.ChangeEvent<HTMLInputElement>;
    inoutElement.simulate("change", event);

    // expect the mock to have been called once
    expect(onChangeMock).toHaveBeenCalledWith(value);
});

