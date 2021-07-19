import React, { useState } from 'react';
import List from './pages/List/list.js'
import View from './pages/View/view.js'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'

const Container =  styled.div `
background-color:
 ` 
 
function App() {

  const [pokemons, setPokemons] = useState(null);
  return (
    <div>
      <BrowserRouter>
      <h1>
          <Link to="/pokemons/list">Brava pokelist</Link>
        </h1>
        <Switch>
          <Route exact path={"/pokemons/list"}>
          <List
          pokemons={pokemons}
          setPokemons={setPokemons}
          />
          </Route>
          <Route exact path={"/pokemons/:name"}>
            <View
            pokemons={pokemons}
            setPokemons={setPokemons}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
