import React from 'react';
import './MythicAffix.scss';
const MythicAffix = props => {
    return (
        <div className="affix">
            <div>{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
}

export default MythicAffix;