import React, {useEffect} from "react";
import "./App.css";
import Main from "./pages/main";
import {useDispatch, useSelector} from "react-redux";
import {fetchPointsDispatch, setNoServerError} from "./redux/actions";
import {hasServerError} from "./redux/selectors";
import {ToastMessage} from "./components/common";

/**
 * App component - renders app
 * @function App
 *
 * @constructor
 *
 * {JSX.Element}
 */
export const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const serverError: boolean = useSelector(hasServerError);

    useEffect(() => {
        dispatch(fetchPointsDispatch);
    }, [dispatch]);

    return (
        <main data-test="component-app" className="d-flex flex-column vh-100">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Konux chart</a>
            </nav>
            {serverError ?
                <ToastMessage data-test="toast-message-element" header="Error!" body="Server error!"
                              onClose={() => dispatch(setNoServerError())}/>
                : null}
            <div className="flex-1">
                <Main/>
            </div>
        </main>
    );
}

export default App;
