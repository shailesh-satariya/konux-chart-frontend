import React from "react";
import * as d3 from "d3";
import {Dimension, Margins} from "../../types";
import Axis, {AxisProps} from "./axis";

export interface XYAxisLineChartProps {
    scales: any;
    svgDimension: Dimension;
    margins: Margins;
}

/**
 * XYAxisLineChart component
 * @param scales
 * @param svgDimension
 * @param margins
 * @constructor
 *
 * @return {JSX.Element}
 */
const XYAxisLineChart = ({scales, svgDimension, margins}: XYAxisLineChartProps): JSX.Element => {
    const xAxisProps: AxisProps = {
        orient: 'Bottom',
        translate: `translate(0,${svgDimension.height - margins.bottom})`,
        scale: scales.xScale,
        tickSize: svgDimension.height - margins.top - margins.bottom,
        ticks: 10,
        className: 'axisBottom',
        padding: 10,
        format: null
    }
    const yAxisProps: AxisProps = {
        orient: 'Left',
        translate: `translate(${margins.left},0)`,
        scale: scales.yScale,
        tickSize: svgDimension.width - margins.left - margins.right,
        ticks: 10,
        className: 'axisLeft',
        padding: 15,
        format: d3.format("")
    }

    return <g data-test="component-xy-axis-line-chart">
        <Axis data-test="x-axis-element" {...xAxisProps} />
        <Axis data-test="y-axis-element" {...yAxisProps} />
    </g>
};

export default XYAxisLineChart;