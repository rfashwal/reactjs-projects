import React from 'react';

import './CharComponent.css';

const charComponent = (props)=>{
    return (
        <div onClick={props.click} className="charComponent">
           {props.charValue}
        </div>
    );
}

export default charComponent;