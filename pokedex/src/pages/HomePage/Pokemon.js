import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Card = styled.div ` 
width: 15vw;
height: 50vh;
margin: 10px;
box-shadow: 0 0 20px rgba(0, 0, 0, .09), 0 0px 40px rgba(0, 0, 0, .09);
border-radius: 10px;
background-color: white;
`
const ImagemPokemon = styled.img ` 
width: 200px;
height: 230px;
`

const NomePokemon = styled.p ` 
text-align: center;
margin-top: -1em;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 700;
font-size: 24px;
`
const ContainerNomePokemon = styled.div ` 
height: 45vh;
`
const BotaoAdd = styled.button `
font-size: .8em;
margin: .5em;
border: 2px solid red;
color: white;
background-color: red;
border-radius: 3px;
width: 5em;
`
const BotaoDetail = styled.button ` 
font-size: .8em;
margin: .5em;
border: 2px solid yellow;
color: black;
background-color: yellow;
border-radius: 3px;
width: 5em;

`
const ContainerBotao = styled.div `
display: flex;
justify-content: center; 
margin-top: -1em;
`


 export function Pokemon (props) {
    const [poke, setPoke] = useState({
        name: " ",
        sprites: {
            front_default: " "
        }
    })
    const getPokemon = (url) => {
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            setPoke(response.data)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
    useEffect(() => {
        getPokemon(props.thisPokemon.url) 
    },[])

    const AddPokemon = () => {
        const listPokemons = props.pokedex.slice([])
        listPokemons.push(poke)
    props.setPokedex(listPokemons)   
    }
    return(
        <Card>
            <ContainerNomePokemon>
                <ImagemPokemon src= {poke.sprites.front_default} ></ImagemPokemon>
                <NomePokemon>{poke.name}</NomePokemon>
            </ContainerNomePokemon>
            <ContainerBotao>
                    <BotaoAdd onClick={AddPokemon}>Adicionar</BotaoAdd>
                    <BotaoDetail>Detalhes</BotaoDetail>
            </ContainerBotao>
           
        </Card>
    )
}
export default Pokemon;

