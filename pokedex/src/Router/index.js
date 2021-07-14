import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "../pages/HomePage/index"
import Pokedex from "../pages/Pokedex/index"
import PokedexDetail from "../pages/PokedexDetail/index"
 export function Router() {

    
    return(
        <div>
           <BrowserRouter>
           <Switch>
               <Route exact path={"/"}>
                   <HomePage/>
               </Route>
               <Route exact path={"/pokedex"}>
                   <Pokedex/>
               </Route>
               <Route exact path={"/detail/:id"}>
                   <PokedexDetail/>
               </Route>
           </Switch>
           </BrowserRouter>

        </div>
    )
}
export default Router;