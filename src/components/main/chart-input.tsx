import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment, {Moment} from "moment";
import DateTime from "../common/date-time";
import {Input} from "../common";
import CONFIG from "../../config";
import {addPointDispatch} from "../../redux/actions";
import {AppState} from "../../types";
import {getAppState} from "../../redux/selectors";

/**
 * Chart input component
 * @constructor
 *
 * @return {JSX.Element}
 */
const ChartInput = (): JSX.Element => {
    const initY: number = 50;
    const appState: AppState = useSelector(getAppState);
    const [x, setX] = React.useState(new Date());
    const [y, setY] = React.useState(initY);
    const dispatch = useDispatch();

    useEffect(() => {
        if (appState === AppState.ADD_POINT_SUCCESS) {
            setX(new Date());
            setY(initY);
        }
    }, [appState]);

    const onChangeX = (moment: string | Moment) => {
        if (typeof moment === "string") {
            setX(new Date(moment));
        } else {
            setX(moment.toDate());
        }
    };

    const onSubmitClick = () => {
        dispatch(addPointDispatch({
            x: moment(x).format(CONFIG.dateTimeFormat as string),
            y: y
        }));
    };

    return (
        <div data-test="component-chart-input">
            <h2>Chart Input</h2>
            <DateTime data-test="x-date-time-element" label="X" value={x} onChange={onChangeX}/>
            <Input data-test="y-input-element" label="Y" value={y} type="number"
                   onChange={(val: string) => setY(parseInt(val))}/>
            <button data-test="submit-button-element" onClick={onSubmitClick}
                    disabled={(appState === AppState.ADD_POINT || appState === AppState.FETCH_POINTS)}>Submit
            </button>
        </div>
    );
};

export default ChartInput;