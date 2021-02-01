import React from "react";
import * as d3 from "d3";
import {Dimension, Margins, Point, Scales} from "../../types";

export interface TooltipProps {
    svgDimension: Dimension;
    scales: Scales;
    margins: Margins;
    data: any[];
}

/**
 * Tooltip element
 * @param svgDimension
 * @param scales
 * @param margins
 * @param data
 * @constructor
 *
 * @return {JSX.Element}
 */
const Tooltip = ({svgDimension, scales, margins, data}: TooltipProps): JSX.Element => {
    const {xScale, yScale}: Scales = scales;
    let bisectMouseValue:
        (array: ArrayLike<any>, x: string | Date | null, lo?: number | undefined, hi?: number | undefined) => number = d3.bisector((d: Point) => d.x).left;
    const translateX: number = xScale(data[1].x) as number;
    const translateY: number = yScale(data[1].y) as number;

    let mouseValue: any, d0: Point, d1: Point, i: number, d: Point;
    const tooltip: JSX.Element = (
        <g
            data-test="tooltip-element"
            className="lineChartTooltip"
            transform={`translate(${translateX},${translateY})`}
        >
            <line
                className="tooltipHoverLine"
                y1="0"
                y2={svgDimension.height - translateY - margins.bottom}
                stroke="#FFF056"
                strokeWidth="1px"
                strokeDasharray="5"
            />
            <circle r="6px" stroke="#FFF056" strokeWidth="3px" fill="#333333"/>
            <text x="-10" y="-10" fontSize="12px">{data[1].y}</text>
        </g>
    )
    const overlay: JSX.Element = (
        <rect
            data-test="overlay-element"
            transform={`translate(${margins.left},${margins.top})`}
            className="lineChartOverlay"
            width={svgDimension.width - margins.left - margins.right}
            height={svgDimension.height - margins.top - margins.bottom}
            opacity="0"
            onMouseMove={(event) => {
                mouseValue = (xScale as any).invert(event.nativeEvent.offsetX) as any;
                i = bisectMouseValue(data, mouseValue, 1);
                d0 = data[i - 1];
                d1 = data[i];
                d = (mouseValue - (d0 as any).x) < ((d1 as any).x - mouseValue) ? d0 : d1;
                d3.select(".lineChartTooltip").attr("transform", "translate(" + xScale(d.x) + "," + yScale(d.y) + ")");
                d3.select(".lineChartTooltip line").attr("y2", svgDimension.height - (yScale as any)(d.y) - margins.bottom);
                d3.select(".lineChartTooltip text").text(d.y);
            }}
            onMouseOut={() => {
                d3.select(".lineChartTooltip").attr("transform", "translate(" + translateX + "," + translateY + ")");
                d3.select(".lineChartTooltip line").attr("y2", svgDimension.height - translateY - margins.bottom);
                d3.select(".lineChartTooltip text").text(data[2].y);
            }}
        />
    )
    return <g data-test="component-tooltip">{overlay}{tooltip}</g>;
};

export default Tooltip;