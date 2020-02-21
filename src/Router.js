import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import Main from './screens/Main/Main';
import Peoples from './screens/Peoples/Peoples';
import Planets from './screens/Planets/Planets';
import Films from './screens//Films/Films';
import Species from './screens/Species/Species';
import Vehicles from './screens/Vehicles/Vehicles';
import Starships from './screens/Starships/Starships';

export default function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/Peoples" component={Peoples}/>
        <Route path="/Planets" component={Planets}/> 
        <Route path="/Films" component={Films}/>
        <Route path="/Species" component={Species}/>
        <Route path="/Vehicles" component={Vehicles}/>
        <Route path="/Starships" component={Starships}/>
        {/* <Route path="*" component={ErrorScreen}/> */}
        
        
      </Switch>
    </BrowserRouter>
  )
}