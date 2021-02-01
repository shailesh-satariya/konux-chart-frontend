import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import * as d3 from "d3";
import {findByTestAttr} from "../../../test/utils";
import Line, {LineProps} from "../line";
import {TestCase} from "../../../types";

const defaultProps: LineProps = {
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
        }]
};

/**
 * Factory function to create a ShallowWrapper for the Line component.
 * @function setup
 *
 * @param {LineProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: LineProps = defaultProps): ShallowWrapper => {
    return shallow(<Line {...props} />);
};

describe("render", () => {
    const testCases: TestCase[] = [
        {
            name: 'component',
            element: 'component-line'
        },
        {
            name: 'path element',
            element: 'path-element'
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

