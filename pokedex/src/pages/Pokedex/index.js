import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const ContainerTituloImagem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Card = styled.div ` 
width: 30vw;
height: 20vh;
margin: 10px;
box-shadow: 0 0 20px rgba(0, 0, 0, .09), 0 0px 40px rgba(0, 0, 0, .09);
border-radius: 10px;
background-color: white;
text-align: center;
`
const ContainerCard = styled.div `
width: 140px;
margin-left: 450px;
` 
const NamePokemon = styled.p `
margin-top: -20px;
color: black;
font-size: 20px;
` 

export function Pokedex(props) {

    const [listPokemon, setListPokemon] = useState([])
  const history = useHistory();
  const name = useParams();

  const homeList = () => {
    history.goBack("/");
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setListPokemon(response.data);
      })
      .catch((error) => {
        console.log(error.reponse);
      });
  }, [name]);

  return (
    <div>
      <button onClick={homeList}>Home</button>
      <ContainerTituloImagem>
        <img src="https://fontmeme.com/permalink/210718/bc2905747bdbd0f1205d01f48a2437e1.png"></img>
      </ContainerTituloImagem>
      <ContainerCard>
        {props.pokedex.map(({ name, sprites }) => {
          return (
            <Card key={name}>
              <Link style={{ textDecoration: 'none' }} to={`/detail/${name}`}>
                <img src={sprites.front_default}></img>
                <img src={sprites.front_shiny}></img>
                <img src={sprites.back_default}></img>
                <NamePokemon>{name}</NamePokemon>
              </Link>
            </Card>
          );
        })}
      </ContainerCard>
    </div>
  );
}
export default Pokedex;
