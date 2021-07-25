// Actions
import { UPDATE_B } from "../actions/ageActions";

const initialState = {
    b: 1,
};

const reducerB = (state = initialState, action) => {
    // Copy the state to not to mutate it
    const newState = { ...state };
    switch (action.type) {
        case UPDATE_B:
            return {
                ...state,
                // Return the sum of a in the state and
                // b in the action
                b: state.b + action.a,
            };
        default:
            break;
    }

    return newState;
};

export default reducerB;
