import React from 'react'
import './card.css'

function Card({title, description}) {
    return (
        <div>
            <div className="card">
                <span className="card__title">{title}</span>
                <p className="card__content">
                    {description}
                </p>
                <form className="card__form">
                    {/* <input required="" type="email" placeholder="Your life" /> */}
                    <button className="card__button">Book a Demo</button>
                </form>
            </div>

        </div>
    )
}

export default Card;