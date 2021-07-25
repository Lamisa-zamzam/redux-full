// Actions
import { UPDATE_A } from "../actions/ageActions";

const initialState = {
    a: 1,
};

const reducerA = (state = initialState, action) => {
    // Copy the state to not to mutate it
    const newState = { ...state };
    switch (action.type) {
        case UPDATE_A:
            return {
                ...state,
                // Return the sum of a in the state and
                // b in the action
                a: state.a + action.b,
            };
        default:
            break;
    }

    return newState;
};

export default reducerA;
