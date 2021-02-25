import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import {
    incrementCounter,
    decrementCounter,
    changeIsLogged,
} from "./redux/actions";

const Card = styled.div`
    max-width: 350px;
    border: 3px solid rgba(120, 248, 61, 0.3);
    padding: 7px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(120, 248, 61, 0.05);
    margin: 30px auto;
`;

function App() {
    const counter = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Hello! Counter = {counter}</h1>
            <Card>Hi bro! Well cum!</Card>
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
