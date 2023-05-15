import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import MainButton from '../../Components/MainButton/MainButton'
import MainTitle from '../../Components/MainTitle/MainTitle'
import Product from '../../Components/Product/Product'
import ProductBox from '../../Components/ProductBox/ProductBox'
import Accordion from '../../Components/Accordion/Accordion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Footer from '../../Components/Footer/Footer'

import { Pagination, Navigation } from "swiper";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Index.css"
import GuidanceStep from '../../Components/GuidanceStep/GuidanceStep'

export default function Index() {

    const [products, setProducts] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [headSets, setHeadSets] = useState([]);
    const [userWishList, setUserWishlist] = useState([]);
    const [userBasket, setUserBasket] = useState([]);
    const [faq, setFaq] = useState([]);

    //get advertise infos
    const getProducts = async () => {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data);
    }

    //get company images
    const getTech = async () => {
        const res = await fetch('http://localhost:3000/technologies');
        const data = await res.json();
        setTechnologies(data);
    }

    //get vr headset product
    const getHeadsets = async () => {
        const res = await fetch('http://localhost:3000/headsets');
        const data = await res.json();
        setHeadSets(data)
    }

    //get faq
    const getFAQ = async () => {
        const res = await fetch('http://localhost:3000/faq');
        const data = await res.json();
        setFaq(data)
    }

    //notification
    const notify = title => {
        toast.success(title, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }

    //add to wishlist
    const addToWishlistHandler = product => {

        const check = [...userWishList].some(item => item.id === product.id)
        if (check) {
            notify('The product has already been added to the Wishlist')
            // return setUserWishlist([...userWishList])

        } else {
            notify('The product has been added to the Wishlist')
            return setUserWishlist([...userWishList, product])
        }
    }

    //add to basket
    const addToCart = product => {

        const check = [...userBasket].some(item => item.id === product.id)
        if (check) {
            let count = Number(product.count) + 1
            product.count = count
            notify('The product number has been updated')
            return setUserBasket([...userBasket])

        } else {

            notify('The product has been added to the Basket')
            return setUserBasket([...userBasket, product])
        }


    }

    //toggle accordion
    const toggleAccordion = item => {
        console.log(item)
    }

    useEffect(() => {
        getProducts()
        getTech()
        getHeadsets()
        getFAQ()
    }, [])


    return (
        <>
            <Header wishList={userWishList} basket={userBasket} />
            <main className="main">
                <div className="container">
                    <section className="introduction">
                        <div className="row">
                            <div className="col-12 col-md-6 order-sm-1">
                                <div className="introduction__content">
                                    <h1 className="introduction__title">
                                        <span className="introduction__title-highlight">Dive</span>
                                        Into The Depths Of
                                        <span className="introduction__title-highlight">Virtual Reality</span>
                                    </h1>
                                    <p className="introduction__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        nisl tincidunt eget. Lectus mauris eros in vitae .
                                    </p>
                                    <MainButton size="2x" text="BUILD YOUR WORLD" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="introduction__banner">
                                    <img src='/public/images/1.png' className="introduction__banner-img"></img>
                                    <img src="/public/images/line-group.png" alt="" className="introduction__banner-line" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact">
                        <div className="contact-wrapper">
                            <div className="contact__map">
                                <div className="contact__icon">
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M35 5.83334C46.2758 5.83334 55.4166 14.9742 55.4166 26.25C55.4166 29.6593 54.5834 32.8717 53.1039 35.6983L35 67.0833L17.3154 36.4595C15.575 33.4542 14.5833 29.9693 14.5833 26.25C14.5833 14.9742 23.7242 5.83334 35 5.83334ZM35 11.6667C26.9458 11.6667 20.4166 18.1959 20.4166 26.25C20.4166 28.566 20.9509 30.7882 21.962 32.7943L22.452 33.6893L35 55.4167L47.6366 33.5362C48.9071 31.3423 49.5833 28.8555 49.5833 26.25C49.5833 18.1959 43.0541 11.6667 35 11.6667ZM35 17.5C39.8325 17.5 43.75 21.4175 43.75 26.25C43.75 31.0825 39.8325 35 35 35C30.1675 35 26.25 31.0825 26.25 26.25C26.25 21.4175 30.1675 17.5 35 17.5ZM35 23.3333C33.3891 23.3333 32.0833 24.6392 32.0833 26.25C32.0833 27.8608 33.3891 29.1667 35 29.1667C36.6108 29.1667 37.9166 27.8608 37.9166 26.25C37.9166 24.6392 36.6108 23.3333 35 23.3333Z" fill="#C0B7E8" />
                                    </svg>
                                </div>
                                <div className="contact__content">
                                    <h2 className="contact__content-title">Pay Us a Visit</h2>
                                    <span className="contact__content-desc">Iran Tehran</span>
                                </div>
                            </div>
                            <span className="contact-separator contact-separator--left"></span>
                            <div className="contact__phone">
                                <div className="contact__icon">
                                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z" stroke="#C0B7E8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="contact__content">
                                    <h2 className="contact__content-title">Give Us a Call</h2>
                                    <span className="contact__content-desc">+98934430289</span>
                                </div>
                            </div>
                            <span className="contact-separator contact-separator--right"></span>
                            <div className="contact__mail">
                                <div className="contact__icon">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349" stroke="#C0B7E8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="contact__content">
                                    <h2 className="contact__content-title">Send Us a Message</h2>
                                    <span className="contact__content-desc">Contact@HydraVTech.com</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="about__point">
                                    <MainTitle title="TO HYDRA VR" />

                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <span className="about__text">
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                                </span>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="about__img">
                                    <img src="/public/images/About.png" alt="about" className="about__banner" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="about__content">
                                    <h2 className="about__title">
                                        ABOUT
                                    </h2>
                                    <span className="about__subtitle">
                                        HYDRA VR
                                    </span>
                                    <p className="about__description">
                                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                                        n tempor.
                                    </p>
                                    <MainButton size="2x" text="LET’S GET IN TOUCH" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="products">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex">
                                <MainTitle title="TOP SELLER" subtitle="best of hydra" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="product__description">
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
                                </p>
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {
                                    headSets.map(headset => (
                                        <SwiperSlide key={headset.id}>
                                            <Product product={headset} {...headset} onWishList={addToWishlistHandler} onBuy={addToCart} />

                                        </SwiperSlide>
                                    ))
                                }

                                <ToastContainer
                                    position="bottom-left"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                />
                            </Swiper>

                        </div>
                    </section>

                    <section className="advertise">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex">
                                <MainTitle title="WHY BUILD" subtitle="WITH HYDRA?" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="advertise__description">
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                                </p>
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >

                                {
                                    products.map(product => (
                                        <SwiperSlide key={product.id} >
                                            <ProductBox {...product} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                    </section>

                    <section className="technologies">
                        <h2 className="technologies__title">
                            TECHNOLOGIES & HARDWARE
                        </h2>
                        <span className="technologies__subtitle">USED BY HYDRA VR.</span>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                technologies.map(technologie => (
                                    <SwiperSlide key={technologie.id}>
                                        <Link to={technologie.href} className="technologies__img">
                                            <img src={`/public/images/${technologie.src}`} alt={technologie.alt} className="technologies__baner" />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </section>

                    <section className="guidance">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="guidance__title">
                                    <MainTitle title="HOW WE BUILD" subtitle="WITH HYDRA VR?" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="guidance__description">
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                                </p>
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <GuidanceStep step="01" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuidanceStep step="02" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuidanceStep step="03" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuidanceStep step="04" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>

                    <section className="ctr">
                        <div className="ctr-wrapper">
                            <h2 className="ctr__title">
                                JOIN HYDRA
                            </h2>
                            <span className="ctr__subtitle">
                                Let’s Build Your VR Experience
                            </span>

                            <form className="ctr__form">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="" id="firstname" className='ctr__form-input' placeholder='First Name' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="" id="lastname" className='ctr__form-input' placeholder='Last Name' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="email" name="" id="email" className='ctr__form-input' placeholder='Email' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="" id="phone" className='ctr__form-input' placeholder='Phone Number' />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="" id="subject" placeholder='Subject' className="ctr__form-subject" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="" id="message" cols="30" rows="10" className='ctr__form-message' placeholder='Tell Us Something...'></textarea>
                                    </div>
                                    <button type="submit" className='form__button primary-button primary-button-sm'>
                                        Send To Hydra
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <section className="faq">
                        <div className="accordion">
                            {
                                faq.map(item => (
                                    <Accordion key={item.id} item={item} toggleAccordion={toggleAccordion}/>
                                ))
                            }
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    )
}
