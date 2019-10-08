const initialState = {
    token: {},
    isLoading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return { ...state, token: action.token };
        case "SAVE_TOKEN":
            return { ...state, token: action.token };
        case "REMOVE_TOKEN":
            return { ...state, token: action.token };
        case "LOADING":
            return { ...state, token: action.isLoading };
        case "ERROR":
            return { ...state, token: action.error };
        default:
            return initialState;
    }
};

export default reducer;
