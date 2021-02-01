import React from "react";
import * as d3 from "d3";
import {Point, Scales} from "../../types";

export interface LineProps {
    scales: Scales;
    data: Point[];
}

/**
 * Line component
 * @param scales
 * @param data
 * @constructor
 *
 * @return {JSX.Element}
 */
const Line = ({scales, data}: LineProps): JSX.Element => {
    const {xScale, yScale} = scales;
    const line: d3.Line<any> = d3.line()
        .x((d: any) => xScale(d.x) as any)
        .y((d: any) => yScale(d.y) as any)
        .curve(d3.curveMonotoneX);

    const path =
        <path
            data-test="path-element"
            d={line(data as any) as (string | undefined)}
            stroke="#FFF056"
            strokeWidth="3px"
            fill="none"
        />
    return (
        <g data-test="component-line">{path}</g>
    )
};

export default Line;