/*import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


 export function Card (props) {

    const [poke, setPoke] = useState({
        name: " ",
        sprites: {
            front_default: " "
        }
    })

    const history = useHistory()
    

    const detailPokedex = () => {
        history.push("/detail/:name")
    }
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

    return(
        <div>
            <div>
                <img src= {poke.sprites.front_default} ></img>
                <p onClick={detailPokedex}>{poke.name}</p>
                {poke}
            </div>
        </div>
    )
}
export default Card;*/