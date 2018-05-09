import React from 'react'
import './User.css'

const userInput = (props) => {
    return (
        <div className="User">
            <p>Please! Username Enter </p>
            <input type="text" onChange={props.changed} value={props.userName}/>
        </div>
    )
};

export default userInput;