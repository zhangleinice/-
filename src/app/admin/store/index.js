import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './city/reducer';

const store = createStore(
    rootReducer
)

export default store;