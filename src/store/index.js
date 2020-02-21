import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk';
import peoplesReducer from './peoples/peoples.reducer';
import planetsReducer from "./planets/planets.reducer";
import filmsreducer from "./Films/films.reducer";
import speciesreducer from "./Species/species.reducer";
import starshipsreducer from "./Starships/starship.reducer";
import vehiclesreducer from "./Vehicles/vehicles.reducer";

const rootReducers = combineReducers({
    peoples: peoplesReducer,
    planets: planetsReducer,
    films: filmsreducer,
    species: speciesreducer,
    starships: starshipsreducer,
    vehicles: vehiclesreducer,
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export default store