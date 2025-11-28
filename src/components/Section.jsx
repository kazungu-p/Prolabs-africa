import React from "react";
import "../assets/styles/services.css"
import Card from "./Card";

function Section({ title, data, className }) {

    function returnItem(cardItem) {
        return (
            <Card
                key={cardItem.key}
                heading={cardItem.heading}
                description={cardItem.description}
                buttonText={cardItem.buttonText}

            />
        )

    }

    return (

        <div className={`section-container ${className || ""}`}>
            <h2>{title}</h2>
            <div className="card-container">
                {
                    data.map(returnItem)
                }
            </div>
        </div>
    )
}

export default Section;