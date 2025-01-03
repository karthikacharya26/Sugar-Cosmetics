import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { loadingReducer } from "./Loading/reducer";
import { loginReducer } from "./Login/reducer";
import { cartReducer } from "./Cart/reducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  loginState: loginReducer,
  cartData: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
