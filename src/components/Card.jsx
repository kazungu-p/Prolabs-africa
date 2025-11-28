import React from "react";
import "../assets/styles/services.css"

function Card(props){

    return(
        <div className="card">
            <h3>{props.heading}</h3>
            <div className="card-description">
                {props.description}
            </div>
            {
                props.buttonText &&(<button>{props.buttonText}</button>)
            }
            
        </div>
    )
}

export default Card;