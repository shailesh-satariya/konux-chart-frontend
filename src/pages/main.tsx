import React from "react";
import * as d3 from "d3";
import moment from "moment";
import {ChartInput} from "../components/main";
import {AppState, Dimension, Margins, Point} from "../types";
import {useSelector} from "react-redux";
import {getAppState, getPoints} from "../redux/selectors";
import CONFIG from "../config";
import {Loader} from "../components/common";
import LineChart from "../components/chart/line-chart";

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
    const appState: AppState = useSelector(getAppState);

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
        <div data-test="component-main" className="d-flex flex-column h-100">
            <div>
                <ChartInput data-test="chart-input-element"/>
            </div>
            <div className="flex-1">
                {
                    (appState === AppState.FETCH_POINTS) ? <Loader data-test="loader-element"/> :
                        (points.length ?
                                <LineChart data-test="line-chart-element" data={data} svgDimension={svgDimension}
                                           margins={margins} xLabel="Time" yLabel="Value"/> : null
                        )
                }
            </div>
        </div>
    );
};

export default Main;