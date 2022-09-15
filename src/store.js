import {createStore ,applyMiddleware} from "redux";
// import createSagaMiddleware from "redux-saga";
//import file
import combineReducers from "./reducer/index";
// import mySaga from './saga';

// const sagaMiddleWare = createSagaMiddleware();
const store = createStore(combineReducers);
// sagaMiddleWare.run(mySaga)
export default store;

// redux sẽ chạy tất cả các reducer khi có một action được thực hiện