import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBasket3Fill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import BasketProduct from '../BasketProduct/BasketProduct'


import "./Header.css"

export default function Header({ wishList, basket }) {

    const [openMenu, setOpenMenu] = useState(false);
    const [openBasket, setOpenBasket] = useState(false);
    const [menus, setMenus] = useState([]);


    const getMenus = async () => {
        const res = await fetch('http://localhost:3000/menus')
        const data = await res.json();
        setMenus(data)
    }

    useEffect(() => {
        getMenus();
    }, [])

    useEffect(() => {
        console.log(basket)
    }, [basket])

    //toggle responsive menu
    const toggleMobileMenu = () => {
        setOpenMenu(prev => !prev)
    }

    //toggle user basket

    const toggleBasketHandler = () => {
        setOpenBasket(prev => !prev)
    }

    //close basket
    const closeUserBasketHandler = () => {
        setOpenBasket(false)
    }





    return (
        <header className="header">
            <div className="container d-flex justify-between">
                <Link to="/" className="header-logo">
                    <img src="/public/images/fav.png" alt="logo" className="header__logo-img" />
                </Link>
                <nav className="header__nav">
                    <ul className={`header__list ${openMenu && 'header__list--responsive'}`}>
                        {
                            menus.map(menu => (
                                <li className="header__list-item" key={menu.id}>
                                    <Link to={menu.href} className="header_list-link">{menu.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="header__contact">
                    <Link to="/" className='header_contact-button'>
                        CONTACT US
                    </Link>
                    <span className="header__wishlist">
                        wishlist
                        <span className="header__wishlist-badge">{wishList.length}</span>
                    </span>
                    <span className="header-separator"></span>
                    <span className="header__basket">
                        <BsFillBasket3Fill onClick={toggleBasketHandler} />
                        <span className="header__wishlist-badge">{basket.length}</span>
                    </span>
                </div>
                <div className="header_toggle" onClick={toggleMobileMenu}>
                    <div className={`header_toggle-button ${openMenu && 'header_toggle-button--active'}`}></div>
                </div>
            </div>
            <div className={`user-basket ${openBasket ? 'active' : ''}`}>
                <div className="user-basket__header">
                    <h3 className="user-basket__title">your basket</h3>
                    <AiOutlineClose className='user-basket__close' onClick={closeUserBasketHandler} />
                </div>

                {
                    basket.length ? (

                        basket.map(product => (
                            <BasketProduct key={product.id} {...product} product={product} />
                        ))
                    )
                        : (
                            <span className="basket-warning">There is no product in your shopping cart. Please add a product to your shopping cart</span>
                        )
                }
                {
                    basket.length ? (
                        <div className="basket-checkout">
                            <Link to="https://react.dev/" className='basket__link-button'>checkout</Link>
                        </div>
                    ) :
                        ('')
                }
            </div>
        </header>
    )
}
