import "./CardTemas.scss";

const CardTemas = (props) => {
    return(
        <div className="card-temas">
            <div class="card-header">
                <img className="card-image" src={props.tema.imagen} alt="tema"/>
            </div>
            <div className="card-details">
                <h2>{props.tema.titulo}</h2>
                <p>{props.tema.tema}</p>
                <button>Conocer más</button>
            </div>
        </div>
    )
}

export default CardTemas;