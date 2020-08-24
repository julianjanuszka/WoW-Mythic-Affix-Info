import React from 'react';
import MythicAffix from './MythicAffix';
import './AffixList.scss'

const AffixList = props => {
    const affixes = props.affixData?.map((affix) => {
        return(
            <MythicAffix
                key={affix.id}
                name={affix?.name}
                description={affix?.description}
            />
        );
    })
    return <div className="affixList">{affixes}</div>;
    
}

export default AffixList;