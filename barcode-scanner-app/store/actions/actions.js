import { AsyncStorage } from "react-native";

//actions
export const getToken = (_token) => {
    return {
        type: "GET_TOKEN",
        token: _token
    };
};

export const saveToken = (_token) => {
    return {
        type: "SAVE_TOKEN",
        token: _token
    };
};

export const removeToken = (_token) => {
    return {
        type: "REMOVE_TOKEN",
        token: _token
    };
};

export const setLoading = (_isLoading) => {
    return {
        type: "LOADING",
        isLoading: _isLoading
    };
};

export const setError = (err) => {
    return {
        type: "ERROR",
        error: err
    };
};

//action creators & async actions

export const getUserToken = () => {

    return dispatch => {
        return AsyncStorage.getItem('userToken')
        .then((data) => {
            console.log(data);
            dispatch(setLoading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(setLoading(false));
            dispatch(setError(err.message || 'ERROR'));
        })
    }
}


export const setUserToken = (value) => {

    return dispatch => {
        return AsyncStorage.setItem('userToken', value)
        .then((data) => {
            console.log("setting" + data);
            dispatch(setLoading(false));
            dispatch(saveToken('tokensaved'));
        })
        .catch((err) => {
            dispatch(setLoading(false));
            dispatch(setError(err.message || 'ERROR'));
        })
    }
}

export const removeUserToken = () => {
    return dispatch => {
        return AsyncStorage.removeItem('userToken')
        .then((data) => {
            dispatch(setLoading(false));
            dispatch(removeToken(data));
        })
        .catch((err) => {
            dispatch(setLoading(false));
            dispatch(setError(err.message || 'ERROR'));
        })
    }
}