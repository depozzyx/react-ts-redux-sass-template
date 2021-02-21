import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    changeIsLogged,
} from "./redux/actions";

function App() {
    const counter = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Hello! Counter = {counter}</h1>
            <button
                onClick={() => {
                    dispatch(incrementCounter());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch(decrementCounter());
                }}
            >
                -
            </button>

            <button
                onClick={() => {
                    dispatch(changeIsLogged());
                }}
            >
                Login
            </button>
            {isLogged ? "You are logged" : ""}
        </div>
    );
}

export default App;
