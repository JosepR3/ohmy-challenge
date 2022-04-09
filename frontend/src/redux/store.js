import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CombinedReducers from './root-reducer';


const thunkApplied = applyMiddleware(thunk);

const store = createStore(CombinedReducers, composeWithDevTools(thunkApplied));

export default store;