import CardTemas from "../CardTemas/CardTemas";
import Temas from "../../helpers/temas.json";
import "./CardTemasContainer.scss";

const CardTemasContainer = () => {
    return(
        <>
            <div className="card-temas-container">
            <input placeholder="Busca por tema"/>
                <div className="container">
                    { Temas.map((tema, index) => <CardTemas tema={tema} key={index}/>)}
                </div>
                <button className="cargar-mas">Cargar más</button>
            </div>
        </>
    )
}

export default CardTemasContainer;