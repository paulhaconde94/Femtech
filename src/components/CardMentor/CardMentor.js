import "./CardMentor.scss";
import image from "../../assets/argentina.png";

const CardMentor = (props) => {
    return(
        <div className="card-mentor">
            <div class="card-header">
                <img className="card-image" src={props.mentor.imagen} alt="mentor"/>
                <img className="card-country" src={image} alt="pais"/>
            </div>
            <div className="card-details">
                <h2>{props.mentor.nombre}</h2>
                <p>{props.mentor.rol} at {props.mentor.empresa}</p>
                <div className="card-description">
                <i className="fa-regular fa-heart"></i>
                    <p>{props.mentor.descripcion}</p>
                </div>
                <button>Conocer más</button>
            </div>
        </div>
    )
}

export default CardMentor;