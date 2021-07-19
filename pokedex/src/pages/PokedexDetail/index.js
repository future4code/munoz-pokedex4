import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 25vw;
  height: 80vh;
  margin: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.09), 0 0px 40px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  background-color: white;
`;
const Container = styled.div `
display: flex;
justify-content: center;
`
const Titulo = styled.h1 `
text-align: center;
color: white;
`
const NamePokemon = styled.h2 `
display: flex;
justify-content: center;
`
const ImagemPokemon = styled.img `
margin-left: 100px;
width: 150px;
height: 150px;
margin-top: -50px;
`
const AbilidadePokemon = styled.h2 `
display: flex;
justify-content: center;
margin-top: -30px;
`
const ContainerPesoPokemon = styled.div `
display: flex;
justify-content: space-evenly;
`
const StatsPokemon = styled.h2 `
display: flex;
justify-content: center;
margin-top: -10px;
`

const PokedexDetail = () => {
  const [detalhePokemon, setDetalhePokemon] = useState(null);
  const { name } = useParams();
  const history = useHistory();


  const backPage = () => {
    history.goBack("/pokedex");
  };
  const homeList = () => {
    history.push("/");
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        console.log("ddddccc", response.data);
        setDetalhePokemon(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [name]);

  if (!detalhePokemon) {
    return null;
  }

  return (
    <div className="PokemonView">
      <button onClick={backPage}>voltar</button>
      <button onClick={homeList}>home</button>
      <Titulo>Detalhes</Titulo>
      <Container>
      <Card>
        <NamePokemon>{detalhePokemon.name}</NamePokemon>
        <ImagemPokemon
          src={detalhePokemon.sprites.front_default}
          alt={detalhePokemon.name}
        />
        <AbilidadePokemon>Abilities</AbilidadePokemon>
        <ul className="PokemonView__abilities">
          {detalhePokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
        </ul>
        <ContainerPesoPokemon>
        <p>Peso</p>
        <p>{detalhePokemon.height}</p>
        </ContainerPesoPokemon>
        <StatsPokemon>States</StatsPokemon>
        <ul className="PokemonView__abilities">
          {detalhePokemon.stats.map((item) => (
            <li>{item.base_stat}</li>
          ))}
        </ul>
      </Card>
      </Container>
    </div>
  );
};
export default PokedexDetail;
