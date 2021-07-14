import React from 'react'
import { useHistory } from 'react-router-dom';


 export function Pokedex () {

    const history = useHistory()

    const detailPokedex = () => {
        history.push("/detail/:id")
    }
    const homeList = () => {
        history.goBack("/")
    }
    return(
        <div>
            <h1>Pokedex Adicionado</h1>
            <button onClick={detailPokedex}>lista pokedex</button>
            <button onClick={homeList}>Home</button>
        </div>
    )
}
export default Pokedex;