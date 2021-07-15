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

 export function HomePage(props) {
    
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
            props.setPokemon(response.data.results)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
    return(
        <Container>
            <button onClick={listPokedex}>pokedex</button>
           <Card>
           {props.pokemon.map((val, idx) => {
               return <Pokemon key={idx}
               thisPokemon={val}
               pokemon={props.pokemon}
               setPokemon={props.setPokemon}
               pokedex={props.pokedex}
               setPokedex={props.setPokedex}
               />
           })}
           </Card>
        </Container>
    )
}
export default HomePage;