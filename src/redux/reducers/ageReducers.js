// Actions
import {
    AGE_INCREMENT,
    AGE_DECREMENT,
    DEL_ITEM,
    LOADING,
} from "../actions/ageActions";

const initialState = {
    age: 21,
    history: [],
    loading: false,
};

const ageReducer = (state = initialState, action) => {
    // Copy the state to not to mutate it
    const newState = { ...state };
    switch (action.type) {
        case AGE_INCREMENT:
            return {
                ...state,
                // Add the payload to the state age
                age: state.age + action.value,
                loading: false,
                history: state.history.concat({
                    id: Math.random(),
                    age: state.age + action.value,
                }),
            };
        case AGE_DECREMENT:
            return {
                ...state,
                // Subtract the payload from the state age
                age: state.age - action.value,
                history: state.history.concat({
                    id: Math.random(),
                    age: state.age - action.value,
                }),
            };
        case DEL_ITEM:
            return {
                ...state,
                // Return the records that doesn't match the id passed
                history: state.history.filter((el) => el.id !== action.key),
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            break;
    }
    return newState;
};

export default ageReducer;
