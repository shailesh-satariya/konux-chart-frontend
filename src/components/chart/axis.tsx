import React, {MutableRefObject, useEffect, useRef} from "react";
import * as d3 from "d3";
import {AxisScale} from "d3";

export interface AxisProps {
    orient: 'Left' | 'Top' | 'Right' | 'Bottom';
    scale: AxisScale<any>;
    tickSize: number;
    padding: number;
    ticks: any;
    format: ((n: number | { valueOf(): number; }) => string) | ((d: Date) => string) | null;
    className: string;
    translate: string;
}

/**
 * Axis component
 * @param orient
 * @param scale
 * @param tickSize
 * @param padding
 * @param ticks
 * @param format
 * @param className
 * @param translate
 * @constructor
 *
 * @return {JSX.Element}
 */
const Axis = ({orient, scale, tickSize, padding, ticks, format, className, translate}: AxisProps): JSX.Element => {
    const ref: MutableRefObject<SVGGElement | null> = useRef(null);
    useEffect(() => {
        if (ref.current) {
            const axisType: ('axisLeft' | 'axisTop' | 'axisRight' | 'axisBottom') =
                `axis${orient}` as ('axisLeft' | 'axisTop' | 'axisRight' | 'axisBottom');
            const axis = (d3[axisType] as Function)()
                .scale(scale)
                .tickSize(-tickSize)
                .tickPadding(padding)
                .ticks(ticks);

            d3.select(ref.current)
                .call(axis)
        }
    }, [orient, scale, tickSize, padding, ticks, format]);

    return (<g data-test="component-axis" className={className} transform={translate} ref={ref}/>);
};

export default Axis;