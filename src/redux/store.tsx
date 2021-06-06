import {applyMiddleware,combineReducers,createStore} from "redux";
import HomePageReducer from "./HomePage-reducer";
import createSagaMiddleware from 'redux-saga';
import {watchingLoadBooks, watchingGetBook, watchingAuthUser} from "../api/saga";
import {BookReducer} from "./Book-reducer";
import AuthReducer from "./Auth-reducer";
let reducer = combineReducers({
    HomePageReducer,
    BookReducer,
    AuthReducer
});

let SagaMiddleware = createSagaMiddleware();
let store = createStore(reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(watchingLoadBooks);
SagaMiddleware.run(watchingGetBook);
SagaMiddleware.run(watchingAuthUser);

export default store;