import CardMentor from "../CardMentor/CardMentor";
import Mentors from "../../helpers/mentors.json";
import "./CardMentorContainer.scss";

const CardMentorContainer = () => {
    return(
        <>
            <div className="card-mentor-container">
            <input placeholder="Busca por nombre, compañia o rol"/>
                <div className="container">
                    <div className="card-special">
                        <h3>¿Quieres encontrar una mentoria con intereses y experiencias similares a los tuyos?</h3>
                        <p>Cuéntanos sobre ti y encontraremos la mentora que mejor te entienda</p>
                        <button>Haz el test</button>
                    </div>
                    { Mentors.map((mentor, index) => <CardMentor mentor={mentor} key={index}/>)}
                </div>
                <button className="cargar-mas">Cargar más</button>
            </div>
        </>
    )
}

export default CardMentorContainer;