import React from "react";
import * as d3 from "d3";
import {AxisScale} from "d3";
import XYAxisLineChart from "./xy-axis-line-chart";
import Line from "./line";
import Area from "./area";
import {Dimension, Margins, Point, Scales} from "../../types";
import Tooltip from "./tooltip";

export interface LineChartProps {
    data: Point[];
    svgDimension: Dimension;
    margins: Margins;
}

/**
 * LineChart component
 * @param data
 * @param svgDimension
 * @param margins
 * @constructor
 *
 * @return {JSX.Element}
 */
const LineChart = ({data, svgDimension, margins}: LineChartProps) => {
    const xScale: AxisScale<any> = d3.scaleTime()
        .domain(d3.extent(data, (p: any) => p.x) as any)
        .range([margins.left, svgDimension.width - margins.right])
        .clamp(true);
    const yScale: AxisScale<any> = d3.scaleTime()
        .domain(d3.extent(data, (p: any) => p.y) as any)
        .range([svgDimension.height - margins.top, margins.bottom])
        .clamp(true);
    const scales: Scales = {xScale, yScale};
    const text: JSX.Element = (
        <text data-test="text-element" transform="translate(60,140)rotate(-90)" fontSize="13">Value</text>
    )
    const rectOverlay: JSX.Element = <rect data-test="overlay-element"
                                           transform={`translate(${margins.left / 2},${margins.top / 2})`}
                                           className="rectOverlayLineChart" width={svgDimension.width - margins.right}
                                           height={svgDimension.height - margins.top} rx="5" ry="5"/>
    return <svg data-test="component-line-chart" className="lineChartSvg"
                viewBox={`0 0 ${svgDimension.width} ${svgDimension.height}`}
                preserveAspectRatio="xMinYMin meet">
        {rectOverlay}{text}
        <XYAxisLineChart data-test="xy-axis-element" scales={scales} margins={margins} svgDimension={svgDimension}/>
        <Line data-test="line-element" scales={scales} data={data}/>
        <Area data-test="area-element" scales={scales} data={data} svgDimension={svgDimension} margins={margins}/>
        <Tooltip data-test="tooltip-element" svgDimension={svgDimension} scales={scales} margins={margins} data={data}/>
    </svg>
}

export default LineChart;