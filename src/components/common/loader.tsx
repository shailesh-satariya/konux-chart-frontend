import React from "react";

/**
 * Loader component
 * @constructor
 */
const Loader = (): JSX.Element => {
    return (
        <div data-test="component-loader" className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;