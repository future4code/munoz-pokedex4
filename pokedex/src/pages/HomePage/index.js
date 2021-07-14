import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Pokemon from './Pokemon';
import styled from "styled-components"

const Card = styled.div ` 
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Container = styled.div ` 
background-color: #1C1C1C;
`

 export function HomePage() {
    const [pokemon, setPokemon] = useState([{ }])
    const [pokedex, setPokedex] = useState([])
    const history = useHistory()

    const listPokedex = () => {
        history.push("/pokedex")
    }

    useEffect(() =>{
        list()
        
    },[])
    const list = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            console.log(response.data.results);
            setPokemon(response.data.results)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
    return(
        <Container>
            <button onClick={listPokedex}>pokedex</button>
           <Card>
           {pokemon.map((val, idx) => {
               return <Pokemon key={idx}
               thisPokemon={val}
               pokemon={pokemon}
               setPokemon={setPokemon}
               pokedex={pokedex}
               setPokedex={setPokedex}
               />
           })}
           </Card>
        </Container>
    )
}
export default HomePage;