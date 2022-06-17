import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={props.to}>
            <div className="card-container">
                <h1 className="card-content">{props.title}</h1>
                <p className="card-content">{props.description}</p>
            </div>
        </Link>
    )
}

export default Card;