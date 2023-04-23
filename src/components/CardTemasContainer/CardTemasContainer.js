import CardTemas from "../CardTemas/CardTemas";
import Temas from "../../helpers/temas.json";
import "./CardTemasContainer.scss";

const CardTemasContainer = () => {
    return(
        <>
            <div className="card-temas-container">
            <div className="search-input">
                <div className="search-icons1">
                    <i className="fa-solid fa-bars"></i>
                </div>
                
                <input placeholder="Busca por tema"/>
                <div className="search-icons2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
                <div className="container">
                    { Temas.map((tema, index) => <CardTemas tema={tema} key={index}/>)}
                </div>
                <button className="cargar-mas">Cargar más</button>
            </div>
        </>
    )
}

export default CardTemasContainer;