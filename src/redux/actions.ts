import { counterInterface, isLoggedInterface } from "./types";

export const incrementCounter = (num = 1): counterInterface => {
    return {
        type: "INCREMENT",
        payload: num,
    };
};

export const decrementCounter = (num = 1): counterInterface => {
    return {
        type: "DECREMENT",
        payload: num,
    };
};

export const changeIsLogged = (): isLoggedInterface => {
    return {
        type: "CHANGE",
    };
};
