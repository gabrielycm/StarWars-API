import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk'
import peoplesReducer from './peoples/peoples.reducer'

const rootReducers = combineReducers({
    peoples: peoplesReducer
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export default store