import React from 'react';
import '../App.css'
import { Button } from './Button';
import './heroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay muted loop />
            <h1>THE WORLD IS YOUR STAGE</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btn">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
