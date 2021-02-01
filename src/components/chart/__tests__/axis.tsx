import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import * as d3 from "d3";
import {findByTestAttr} from "../../../test/utils";
import Axis, {AxisProps} from "../axis";

const defaultProps: AxisProps = {
    orient: 'Left',
    translate: `translate(50,0)`,
    scale: d3.scaleTime(),
    tickSize: 50,
    ticks: 5,
    className: 'axisLeft',
    padding: 15,
    format: null
};

/**
 * Factory function to create a ShallowWrapper for the Axis component.
 * @function setup
 *
 * @param {AxisProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: AxisProps = defaultProps): ShallowWrapper => {
    return shallow(<Axis {...props} />);
};

describe("render", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders component without an error", () => {
        const componentAxis = findByTestAttr(wrapper, "component-axis");

        expect(componentAxis.length).toBe(1);
    });
});

