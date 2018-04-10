import React from 'react';

import './UserOutput.css';

const userOutput = (props)=>{
    return (
        <div className='UserOutput'>
            <p>Hello <span id='nameSpan'> {props.userName} !!!</span></p>
            <p>Enter New User Name</p>
        </div>
    );
}

export default userOutput;