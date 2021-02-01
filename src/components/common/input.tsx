import React from "react";

export interface InputPops {
    value: number | string;
    label: string;
    type: "text" | "number";
    onChange: (val: string) => void;
}

/**
 * Input component
 * @param value
 * @param label
 * @param type
 * @param onChange
 * @constructor
 *
 * @return JSX.Element
 */
const Input = ({value, label, type, onChange}: InputPops): JSX.Element => {
    return (
        <div data-test="component-input" className="form-group mb-0">
            <label data-test="input-label">{label}</label>
            <input data-test="input-element" type={type} value={value}
                   className="form-control"
                   onChange={((event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value))}/>
        </div>
    );
};

export default Input;