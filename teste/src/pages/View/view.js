import axios from 'axios';
import React, {
    useEffect,
    useState,
  } from 'react';
  import { useParams } from 'react-router-dom';
  
  
  const PokemonView = () => {
    const [pokemon, setPokemon] = useState(null);
    const { name }  = useParams();
    console.log("mmmmmmmmmmmm", name);
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            console.log("ddddccc", response.data);
            setPokemon(response.data)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }, [name]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="PokemonView">
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        Abilities
        <ul className="PokemonView__abilities">
          {pokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonView;