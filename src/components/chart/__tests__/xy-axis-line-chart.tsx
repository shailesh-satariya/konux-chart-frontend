import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import * as d3 from "d3";
import {findByTestAttr} from "../../../test/utils";
import XYAxisLineChart, {XYAxisLineChartProps} from "../xy-axis-line-chart";
import {TestCase} from "../../../types";

const defaultProps: XYAxisLineChartProps = {
    scales: {
        xScale: d3.scaleTime(),
        yScale: d3.scaleTime()
    },
    svgDimension: {width: 1200, height: 600},
    margins: {left: 10, top: 10, right: 10, bottom: 10}
};

/**
 * Factory function to create a ShallowWrapper for the XYAxisLineChart component.
 * @function setup
 *
 * @param {XYAxisLineChartProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: XYAxisLineChartProps = defaultProps): ShallowWrapper => {
    return shallow(<XYAxisLineChart {...props} />);
};

describe("render", () => {
    const testCases: TestCase[] = [
        {
            name: 'component',
            element: 'component-xy-axis-line-chart'
        },
        {
            name: 'x axis element',
            element: 'x-axis-element'
        },
        {
            name: 'y axis element',
            element: 'y-axis-element'
        },
    ];

    for (const testCase of testCases) {
        test(`renders ${testCase.name} without an error`, () => {
            const wrapper: ShallowWrapper = setup();
            const element = findByTestAttr(wrapper, testCase.element);

            expect(element.length).toBe(1);
        });
    }


});

