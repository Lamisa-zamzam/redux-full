import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import ageReducer from "../reducers/ageReducers";
import reducerA from "../reducers/reducerA";
import reducerB from "../reducers/reducerB";

// Root Reducer
const rootReducer = combineReducers({
    rAge: ageReducer,
    rA: reducerA,
    rB: reducerB,
});

// Custom middleware
const logAction = (store) => {
    return (next) => {
        return (action) => {
            const result = next(action);
            console.log("Caught it", result);
            return result;
        };
    };
};

// Create the store combining all the reducers and
// applying the thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
