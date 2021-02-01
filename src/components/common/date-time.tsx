import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {Moment} from "moment";
import CONFIG from "../../config";

export interface DateTimeProps {
    value: Date;
    label: string;
    onChange: (val: string | Moment) => void;
}

/**
 * Date time component
 * @param {Date} value
 * @param {string} label
 * @param {(val: string | Moment) => void} onChange
 * @constructor
 *
 * @return {JSX.Element}
 */
const DateTime = ({value, label, onChange}: DateTimeProps): JSX.Element => {
    return (
        <div data-test="component-date-time" className="form-group mb-0">
            <label data-test="date-time-label">{label}</label>
            <Datetime data-test="date-time-element" value={value}
                      inputProps={{className: 'form-control'}}
                      onChange={(moment: string | Moment) => onChange(moment)}
                      timeFormat={CONFIG.timeFormat}/>
        </div>
    );
};

export default DateTime;