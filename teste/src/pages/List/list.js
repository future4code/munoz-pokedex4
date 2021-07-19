import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';




const PokemonList = (props) => {
  
    

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
          console.log(response.data);
          props.setPokemons(response.data.results);
      })
      .catch((error) => {
          console.log(error.response);
      })
  }, []);

  

  return (
    <ul>
        {props.pokemons.map(({ name }) => {
            return <li key={name}>
                <Link to={`/pokemons/${name}`}>
                {name}
                </Link>
            </li>
        })}
    </ul>
  );
};

export default PokemonList;