import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk';
import swapireducer from './swapi/swapi.reducer'

const rootReducers = combineReducers({
    swapi: swapireducer,
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export default store