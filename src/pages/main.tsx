import React from "react";
import * as d3 from "d3";
import moment from "moment";
import {ChartInput} from "../components/main";
import {Dimension, Margins, Point} from "../types";
import LineChart from "../components/chart/line-chart";
import {useSelector} from "react-redux";
import {getPoints} from "../redux/selectors";
import CONFIG from "../config";

/**
 * DisConnectedChart component - renders chart and input
 * @function DisConnectedChart
 *
 * @constructor
 *
 * {JSX.Element}
 */
const Main = (): JSX.Element => {
    const margins: Margins = CONFIG.margins;
    const svgDimension: Dimension = {height: CONFIG.height, width: CONFIG.width};

    const points: Point[] = useSelector(getPoints);

    // Format the points to be parsed by d3
    const parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S%Z");
    let data: Point[] = points.map((d: Point) => {
        return {
            x: parseTime(moment(d.x).format()),
            y: d.y
        }
    });

    // Sort the data by time
    data.sort((p1: Point, p2: Point) =>
        (parseInt(moment(p1.x).format('X')) - parseInt(moment(p2.x).format('X'))));

    return (
        <div data-test="component-main">
            {
                points.length ?
                    <LineChart data-test="line-chart-element" data={data} svgDimension={svgDimension}
                               margins={margins}/> : null
            }
            <ChartInput data-test="chart-input-element"/>
        </div>
    );
};

export default Main;