import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

import productReducer from "./reducers/productReducer"
import cartReducer from "./reducers/cartReducer";

const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;