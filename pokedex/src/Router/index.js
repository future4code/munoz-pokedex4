import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "../pages/HomePage/index"
import Pokedex from "../pages/Pokedex/index"
import PokedexDetail from "../pages/PokedexDetail/index"
 export function Router() {

    const [pokemon, setPokemon] = useState([{ }])
    const [pokedex, setPokedex] = useState([])
    
    return(
        <div>
           <BrowserRouter>
           <Switch>
               <Route exact path={"/"}>
                   <HomePage 
                   pokemon={pokemon}
                   setPokemon={setPokemon}
                   pokedex={pokedex}
                   setPokedex={setPokedex}
                   />
               </Route>
               <Route exact path={"/pokedex"}>
                   <Pokedex
                   pokemon={pokemon}
                   setPokemon={setPokemon}
                   pokedex={pokedex}
                   setPokedex={setPokedex}
                   />
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