import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-001.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="Adventure"
                            path="/services" />
                        <CardItem
                            src="images/img-003.jpg"
                            text="Travel through the Islands of Ball in a Private Cruise"
                            label="Luxury"
                            path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/imh-004.jpg"
                            text="Sail though or Dive in the Atlantic Ocean Visiting Uncharted Waters"
                            label="Enigma"
                            path="/services" />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Experience World Class Football on Top Of The Himilayan Mountains"
                            label="Sports"
                            path="/services" />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Ride Through the Sahara Desert on a guided Camel Tour"
                            label="Epinephrine"
                            path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
