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

    const [numeroPagina, setNumeroPagina] = useState(1);
    
    const history = useHistory()

    const listPokedex = () => {
        history.push("/pokedex")
    }

    const onClickProxima = () => {
        setNumeroPagina(numeroPagina + 1);
      };
    
      const onClickAnterior = () => {
        setNumeroPagina(numeroPagina - 1);
      };

    useEffect(() =>{
        const offset = (numeroPagina - 1) * 5;
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => {
            console.log(response.data.results);
            props.setPokemon(response.data.results)
        })
        .catch((error) => {
            console.log(error.response);
        })
        
    },[numeroPagina])
    
        
    
    return(
        <Container>
            <button onClick={listPokedex}>pokedex</button>
           <Card>
           {props.pokemon.map((name, idx) => {
               return <Pokemon key={idx}
               thisPokemon={name}
               pokemon={props.pokemon}
               setPokemon={props.setPokemon}
               pokedex={props.pokedex}
               setPokedex={props.setPokedex}
               />
           })}
           </Card>
           <p>Página: {numeroPagina}</p>
      <button onClick={onClickAnterior}>Anterior</button>
      <button onClick={onClickProxima}>Próxima</button>
        </Container>
    )
}
export default HomePage;