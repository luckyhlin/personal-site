// components/GameCarousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.scss';

const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: "10px",
        beforeChange: (current, next) => setActiveIndex(next),
        variableWidth: true, // critical option!
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    swipeToSlide: true,
                    focusOnSelect: true,
                    className: "center",
                    centerMode: true,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    swipeToSlide: true,
                    focusOnSelect: true,
                    className: "center",
                    centerMode: true,
                    centerPadding: "10px",
                }
            },
        ],
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section className={styles.carouselSection}>
            {/*<h2 className={styles.lineTitle}>Trending Games</h2>*/}
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        <div
                            // className={styles.imageContainer}
                            className={`${styles.item} ${index === activeIndex ? styles.active : ''}`}
                            style={{ ...(item.background && {background: item.background}),
                                     ...(item.zIndex && {zIndex: item.zIndex}),
                            }}
                        >
                            <div className={`${styles.backgroundImage} ${index === activeIndex ? styles.activeBackground : ''}`} style={{
                                ...(item. backgroundImage && {backgroundImage: item.backgroundImage}),
                                ...(item.filter && index === activeIndex && {filter: item.filter}),
                            }}></div>
                            {/*<div className={`${index === activeIndex ? styles.overlay: ''}`}></div>*/}
                            <div className={`${styles.itemDesc} ${index === activeIndex ? styles.active : ''}`}>
                                <h3>{item.title}</h3>
                                {typeof item.description === 'string' ? (
                                    <p>{item.description}</p>
                                ) :
                                    item.description
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/*<p style={{*/}
            {/*    color: "grey",*/}
            {/*    opacity: 0.2,*/}
            {/*    fontSize: "12px",*/}
            {/*    margin: "40px 20px",*/}
            {/*}}>Photos come from Unsplash</p>*/}
        </section>
    );
};

export default Carousel;
