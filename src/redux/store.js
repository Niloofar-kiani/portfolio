import { createStore, combineReducers,applyMiddleware} from 'redux';
import {modeReducer} from "./reducers/themeModeReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  mode: modeReducer
})


let initialState = {
  mode:{
    mode: "light"
  }
}
const middleware = [thunk];
const store = createStore(reducer, initialState,  composeWithDevTools(
  applyMiddleware(...middleware)
))
export default store;