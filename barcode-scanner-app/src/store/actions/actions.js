import { AsyncStorage } from "react-native";

//actions
export const getToken = (_token) => {
    return {
        type: "GET_TOKEN",
        token: _token,
        authLoaded:true,
    };
};

export const saveToken = (_token) => {
    return {
        type: "SAVE_TOKEN",
        token: _token
    };
};

export const removeToken = () => {
    return {
        type: "REMOVE_TOKEN",
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

export const getUserToken = () => dispatch => 

 AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(setLoading(false));
            dispatch(getToken(data));
            console.log('GETTING then SETTING token: ----- ' + data);
        })
        .catch((err) => {
            dispatch(setLoading(false));
            dispatch(setError(err.message || 'ERROR'));
        })


export const setUserToken = (value) => {
    return dispatch => {
        return AsyncStorage.setItem('userToken', value)
            .then((data) => {
                dispatch(setLoading(false));
                dispatch(saveToken(value));
                console.log('SETTING USER TOKEN: ----- ' + value);
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
                dispatch(removeToken());
                console.log('REMOVING USER TOKEN: ----- ');
            })
            .catch((err) => {
                dispatch(setLoading(false));
                dispatch(setError(err.message || 'ERROR'));
            })
    }
}