import React from 'react';

const Character = (props) => {
    return (
        <div className="Character" >
        <h1 className="character-name">{props.character.name}</h1>
        <div className={`info ${props.hidden ? 'hidden' : ''}`}>
            <p>Born: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
        </div>

        </div>
    );
}

export default Character;