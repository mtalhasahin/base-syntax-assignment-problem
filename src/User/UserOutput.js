import React from 'react'
import './User.css'

const userOutput = (props) => {
    return (
        <div className="User">
            <p>
                <span>Username:</span> {props.userName}
            </p>
        </div>
    )
};

export default userOutput;