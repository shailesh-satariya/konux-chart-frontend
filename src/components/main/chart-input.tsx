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
        <form data-test="component-chart-input">
            <div className="p-2 form-container">
                <div className="form-row">
                    <div className="col-md-5">
                        <DateTime data-test="x-date-time-element" label="Time (X)" value={x} onChange={onChangeX}/>
                    </div>
                    <div className="col-md-5">
                        <Input data-test="y-input-element" label="Value (Y)" value={y} type="number"
                               onChange={(val: string) => setY(parseInt(val))}/>
                    </div>
                    <div className="col-md-2">
                        <label>&nbsp;</label>
                        <button data-test="submit-button-element" onClick={onSubmitClick}
                                className="btn btn-primary w-100"
                                disabled={(appState === AppState.ADD_POINT || appState === AppState.FETCH_POINTS)}>Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ChartInput;