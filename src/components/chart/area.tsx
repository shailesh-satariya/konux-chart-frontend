import React from "react";
import * as d3 from "d3";
import {Dimension, Margins, Point, Scales} from "../../types";

export interface AreaProps {
    scales: Scales;
    data: Point[];
    svgDimension: Dimension;
    margins: Margins;
}

/**
 * Area component
 * @param scales
 * @param data
 * @param svgDimension
 * @param margins
 * @constructor
 *
 * @return {JSX.Element}
 */
const Area = ({scales, data, svgDimension, margins}: AreaProps): JSX.Element => {
    const {xScale, yScale} = scales;
    const area: d3.Area<any> = d3.area()
        .x((d: any) => xScale(d.x) as any)
        .y0(svgDimension.height - margins.bottom)
        .y1((d: any) => yScale(d.y) as any)
        .curve(d3.curveMonotoneX);

    const areaGradient: JSX.Element =
        <linearGradient
            data-test="liner-gradient-element"
            id="area-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={yScale(0)}
            x2="0"
            y2={yScale(1000)}
        >
            <stop
                offset="0%"
                stopColor="#333333"
                stopOpacity="0"
            >
            </stop>
            <stop
                offset="100%"
                stopColor="#FFF056"
                stopOpacity="0.5"
            >
            </stop>
        </linearGradient>

    const path: JSX.Element =
        <path
            data-test="path-element"
            d={area(data) as string | undefined}
            className="area"
        />
    return (
        <g data-test="component-area">{areaGradient}{path}</g>
    )
}

export default Area;