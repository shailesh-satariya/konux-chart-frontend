import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import * as d3 from "d3";
import {findByTestAttr} from "../../../test/utils";
import Tooltip, {TooltipProps} from "../tooltip";
import {TestCase} from "../../../types";

const defaultProps: TooltipProps = {
    scales: {
        xScale: d3.scaleTime(),
        yScale: d3.scaleTime()
    },
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
 * Factory function to create a ShallowWrapper for the Tooltip component.
 * @function setup
 *
 * @param {TooltipProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: TooltipProps = defaultProps): ShallowWrapper => {
    return shallow(<Tooltip {...props} />);
};

describe("render", () => {
    const testCases: TestCase[] = [
        {
            name: 'component',
            element: 'component-tooltip'
        },
        {
            name: 'overlay element',
            element: 'overlay-element'
        },
        {
            name: 'tooltip element',
            element: 'tooltip-element'
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

