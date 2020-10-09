import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <section className='footer-subscription'>
                    <p className="footer-subscription-heading">
                        Join the Adventurer Newsletter to receive our best vacation deals.
                </p>
                    <p className="footer-subscription-text">
                        You can Unsubscribe at anytime.
                </p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                            <Button buttonStyle="btn--outline">
                                Subscribe
                        </Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="/sign-up">How it works</Link>
                            <Link to="/services">Clients Remarks</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Investors</Link>
                            <Link to="/">Terms of service</Link>
                        </div>

                        <div className="footer-link-items">
                            <h2>Services</h2>
                            <Link to="/sign-up">Travel Destinations</Link>
                            <Link to="/services">Visa</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Investors</Link>
                            <Link to="/">Terms of service</Link>
                        </div>
                    </div>

                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Contact Us</h2>
                            <Link to="/sign-up">Office Address</Link>
                            <Link to="/services">Google Maps</Link>
                            <Link to="/">Hotline</Link>
                            <Link to="/">WhatSapp Number</Link>
                            <Link to="/">Terms of service</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <Link to="/">Facebook</Link>
                            <Link to="/">twitter</Link>
                            <Link to="/">Instagram</Link>
                            <Link to="/">YouTube</Link>
                            <Link to="/">LinkedIn</Link>
                        </div>
                    </div>
                </div>

                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to='/' className="social-logo">
                                DMT <i className='fas fa-bolt' />
                            </Link>
                        </div>
                        <small className="website-rights">DMT (c) 2020</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook" to='/' target="_blank"
                                aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link twitter" to='/' target="_blank"
                                aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="social-icon-link instagram" to='/' target="_blank"
                                aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link youtube" to='/' target="_blank"
                                aria-label="Youtube">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link className="social-icon-link linkedin" to='/' target="_blank"
                                aria-label="Linkedin">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Footer
