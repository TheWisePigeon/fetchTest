import React from "react";

function Avatar(props) {
    return (
        <div>
            <img src={props.src} alt="" />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Avatar