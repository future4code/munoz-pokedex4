
import { useHistory } from 'react-router-dom';


 export function Pokedex (props) {

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
            {props.pokedex.map((list) => {
                console.log("LIsta", list.name);
                return( <div>
                    <p>{list.name}</p>
                    <img src={list.sprites.front_default}></img>
                    </div>
                )
            })}
            <button onClick={detailPokedex}>lista pokedex</button>
            <button onClick={homeList}>Home</button>
        </div>
    )
}
export default Pokedex;