import React from 'react';
import './MythicAffix.scss';

const MythicAffix = props => {
    const ico = `./images/${props.name}.jpg`
    return (
        <div className="affix">
            <img src={ico} alt="affix-ico" />
            <div>{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
}

export default MythicAffix;