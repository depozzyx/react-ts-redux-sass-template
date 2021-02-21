import { isLoggedInterface } from "../types";

const isLoggedReducer = (state = false, action: isLoggedInterface) => {
    switch (action.type) {
        case "CHANGE":
            return !state;
        default:
            return state;
    }
};
export default isLoggedReducer;
