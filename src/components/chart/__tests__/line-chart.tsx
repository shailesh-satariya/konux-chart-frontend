import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import LineChart, {LineChartProps} from "../line-chart";
import {TestCase} from "../../../types";

const defaultProps: LineChartProps = {
    data: [
        {x: "2021-01-27T07:13:33.742Z", y: 70},
        {
            x: "2021-01-26T07:13:33.743Z",
            y: 97,
        },
        {x: "2021-01-25T07:13:33.743Z", y: 20},
        {
            x: "2021-01-24T07:13:33.743Z",
            y: 97,
        }],
    svgDimension: {width: 1200, height: 600},
    margins: {left: 10, top: 10, right: 10, bottom: 10}
};

/**
 * Factory function to create a ShallowWrapper for the LineChart component.
 * @function setup
 *
 * @param {LineChart} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: LineChartProps = defaultProps): ShallowWrapper => {
    return shallow(<LineChart {...props} />);
};

describe("render", () => {
    const testCases: TestCase[] = [
        {
            name: 'component',
            element: 'component-line-chart'
        },
        {
            name: 'line element',
            element: 'line-element'
        },
        {
            name: 'area element',
            element: 'area-element'
        },
        {
            name: 'tooltip element',
            element: 'tooltip-element'
        },
        {
            name: 'overlay element',
            element: 'overlay-element'
        },
        {
            name: 'text element',
            element: 'text-element'
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

