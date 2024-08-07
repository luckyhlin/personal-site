// components/GameCarousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.scss';

const games = [
    {
        title: '⚽ sports',
        description: 'biking, soccer, eight-ball pool, badminton, table tennis, wall climbing, snowboarding, sailing, tennis,\n' +
            '                        frisbee & a LOT',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg'
    },
    {
        title: 'The Witcher 3',
        description: 'The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg'
    },
    {
        title: 'RDR 2',
        description: 'RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg'
    },
    {
        title: 'PUBG Mobile',
        description: 'PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg'
    },
    {
        title: 'Fortnite',
        description: 'Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg'
    },
    {
        title: 'Far Cry 5',
        description: 'Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg'
    }
];

const Carousel = () => {
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
        responsive: [
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
        // autoplay: true,
        // autoplaySpeed: 3000,
        variableWidth: true, // critical option!
        // beforeChange: (current, next) => {
        //     let deltaIdx = next - (current + 1);
        //     deltaIdx = (deltaIdx + games.length) % games.length; // map to [0, length-1]
        //     let nextIdx = (current + deltaIdx + 1) % games.length;
        //     console.log(current, deltaIdx, nextIdx);
        //     // if click at center, deltaIdx = 0
        //     // if click at left, deltaIdx = length-1
        //     // if click at right, deltaIdx = 1
        //     setActiveIndex(nextIdx);
        // },
    };

    return (
        <section className={styles.gameSection}>
            <h2 className={styles.lineTitle}>Trending Games</h2>
            <div className={`${styles.item}`} style={{ backgroundImage: `url("https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg")` }}>abc</div>
            {/*<Slider {...settings}>*/}
            {/*    <div>*/}
            {/*        <h3 className={styles.test}>1</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className={styles.test}>2</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className={styles.test}>3</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 className={styles.test}>4</h3>*/}
            {/*    </div>*/}
            {/*</Slider>*/}
            <Slider {...settings}>
                {games.map((game, index) => (
                    <div>
                        <div
                            // className={styles.imageContainer}
                            className={`${styles.item} ${index === activeIndex ? styles.active : ''}`}
                            style={{ backgroundImage: `url(${game.imageUrl})` }}
                        >
                            <div className={`${styles.itemDesc} ${index === activeIndex ? styles.active : ''}`}>
                                <h3>{game.title}</h3>
                                <p>{game.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Carousel;
