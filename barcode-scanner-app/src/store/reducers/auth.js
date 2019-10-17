const initialState = {
    token: null,
    isLoading: false,
    error: null,
    authLoaded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return { ...state, token: action.token, authLoaded:action.authLoaded };
        case "SAVE_TOKEN":
            return { ...state, token: action.token };
        case "REMOVE_TOKEN":
            return { ...state, token: null};
        case "LOADING":
            return { ...state, isLoading: action.isLoading };
        case "ERROR":
            return { ...state, error: action.error };
        default:
            return initialState;
    }
};

export default reducer;
