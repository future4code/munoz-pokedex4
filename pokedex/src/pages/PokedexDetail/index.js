import React from 'react'
import { useHistory } from 'react-router-dom';


 export function PokedexDetail () {

    const history = useHistory()

    const backPage = () => {
        history.goBack("/pokedex")
    }
    const homeList = () => {
        history.push("/")
    }
    return(
        <div>
            <h1>Detalhes</h1>
            <button onClick={backPage}>voltar</button>
            <button onClick={homeList}>home</button>
        </div>
    )
}
export default PokedexDetail;