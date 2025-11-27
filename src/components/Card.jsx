import React from "react";

function Card(props){
    return(
        <div className="card-frame">
            <h3>{props.heading}</h3>
            <p>{props.heading}</p>
            <button>{props.btnText}</button>
        </div>
    )
}

export default Card;