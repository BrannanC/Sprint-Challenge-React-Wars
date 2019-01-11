import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return (
        <ul className="CharacterList" >{props.characters.map((x, i) => <Character character={x} key={i} showInfo={props.showInfo} hideInfo={props.hideInfo} />)}</ul>
    );
}

export default CharacterList;