import React, { useState, useEffect } from 'react'
import SocialIcon from '../SocialIcon/SocialIcon'
import MainButton from '../MainButton/MainButton'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagramSquare, FaPinterest } from "react-icons/fa"

import "./Footer.css"

export default function Footer() {

    const [footerMenu, setFooterMenu] = useState([]);
    const [quickAccess, setQuickAccess] = useState([]);

    const getFooterMenu = async () => {
        const res = await fetch('http://localhost:3000/footerMenu');
        const data = await res.json();
        setFooterMenu(data)
    }
    const getQuickAccess = async () => {
        const res = await fetch('http://localhost:3000/quickAccess');
        const data = await res.json();
        setQuickAccess(data)
    }


    useEffect(() => {
        getFooterMenu();
        getQuickAccess();
    }, [])


    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 footer-separator">
                        <div className="footer__brand">
                            <img src="/public/images/fav.png" alt="logo" className="footer__logo" />
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 footer-separator">
                        <ul className="footer__list">
                            {
                                footerMenu.map(item => (
                                    <li className="footer__list-item" key={item.id}>
                                        <Link to={item.href} className="footer__list-item-link">{item.text}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 footer-separator">
                        <ul className="footer__list">
                            {
                                quickAccess.map(item => (
                                    <li className="footer__list-item" key={item.id}>
                                        <Link to={item.href} className="footer__list-item-link">{item.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="footer__social">
                            <h3 className="footer__social-title">
                                SOCIALIZE WITH HYDRA
                            </h3>
                            <div className="footer__social-icon">
                                <SocialIcon icon={<FaFacebook />} />
                                <SocialIcon icon={<FaTwitter />} />
                                <SocialIcon icon={<FaLinkedinIn />} />
                                <SocialIcon icon={<FaYoutube />} />
                                <SocialIcon icon={<FaInstagramSquare />} />
                                <SocialIcon icon={<FaPinterest />} />
                            </div>
                            <MainButton size="1x" text="BUILD YOUR WORLD" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer__copy-right">
                        <span className="footer__copt-right-text">
                            2023 © HYDRA LANDING PAGE - BY Hr Ashkan - UI Zine. E. Falouti - ALL RIGHTS RESERVED
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

