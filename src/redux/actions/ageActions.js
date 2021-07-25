// Actions
export const AGE_INCREMENT = "AGE_INCREMENT";
export const AGE_DECREMENT = "AGE_DECREMENT";
export const DEL_ITEM = "DEL_ITEM";
export const UPDATE_A = "UPDATE_A";
export const UPDATE_B = "UPDATE_B";
export const LOADING = "LOADING";

// Actions creators --- thunks
// Synchronous action creator
export const ageIncrement = (val) => {
    return (dispatch) => {
        dispatch(loading());
        setTimeout(() => {
            val++;
            dispatch(ageIncrementAsync(val));
        }, 5000);
    };
};

// Asynchronous action creator
export const ageIncrementAsync = (val) => {
    return { type: AGE_INCREMENT, value: val };
};

export const loading = () => {
    return {
        type: "LOADING",
    };
};

export const ageDecrement = (val) => {
    return { type: AGE_DECREMENT, value: val };
};
