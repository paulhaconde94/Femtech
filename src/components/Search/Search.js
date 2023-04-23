import "./Search.scss";
import React, { useState } from 'react';
import CardMentorContainer from "../CardMentorContainer/CardMentorContainer";
import CardTemasContainer from "../CardTemasContainer/CardTemasContainer";

const Search = () => {
    const [searchMentor, setSearchMentor] = useState(true);
    
    return(
        <div className="search">
            <div className="search-button">
                <button className={searchMentor && "active"} onClick={() => setSearchMentor(true)}>Mentoras</button>
                <button className={!searchMentor && "active"} onClick={() => setSearchMentor(false)}>Temas de interés</button>
            </div>
            <div className="search-line"></div>
            {
                searchMentor
                ? 
                <CardMentorContainer/> :
                <CardTemasContainer/>
            }
        </div>
    )
}

export default Search;