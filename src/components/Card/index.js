import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <>
            <div className="card-container">
                <h1 className="card-content">{props.title}</h1>
                <p className="card-content">{props.description}</p>
            </div>
        </>
    )
}

export default Card;