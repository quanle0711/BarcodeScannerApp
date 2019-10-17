import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './store/reducers/auth';
import thunk from 'redux-thunk';

//set up main reducer
const rootReducer = combineReducers({
    auth: authReducer
})


//set up store
const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;