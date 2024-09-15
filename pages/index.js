import Link from "next/link";
import styles from "../styles/home.module.scss";
import Description from "../components/description";
import Navigation from "../components/navigation";
import Name from "../components/name.js";
import FootageText from "../components/footage-text";
import Head from "next/head";
import About from "../components/about";
import MyGiscus from "../components/giscus";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import ScrollToTop from "../components/scroll-to-top";
import CustomCarousel from "../components/carousel";

const hobbies = [
    {
        title: '⛰️ WoW',
        description: 'Nature and Beauties. I need photos to remind me of the precious moments in life. They allocate meanings to my life.',
        backgroundImage: `url('/images/bg1.jpeg')`,
    },
    {
        title: '⚽ Sports',
        description: (
            <ul style={{
                color: "white",
                opacity: 1,
                listStyle: "none",
                // marginLeft: "10px",
            }}>
                <li>🏹 archery</li>
                <li>⚽ soccer</li>
                <li>🎱 billiards</li>
                <li>🏸 badminton</li>
                <li>🏓 table tennis</li>
                <li>🧗 climbing</li>
                <li>🏂 snowboard</li>
                <li>⛵️ sailing</li>
                <li>🎾 tennis</li>
                <li>🥏 frisbee</li>
            </ul>
        ),
        // background: 'linear-gradient(135deg, #4aeadc 0%, #9778d1 20%, #cf2aba 40%, #ee2c82 60%, #fb6962 80%, #fef84c 100%) fixed',
        backgroundImage: `url('/images/bg2.jpeg')`,
        // filter: "blur(10px)",
        // zIndex: "-1",
    },
    {
        title: '🎮 Games',
        description: 'A HUGE fan of multi-player FPS 🔫 games: APEX, 彩虹六号 (R6), CS:GO, 战地 (Battlefield 1 & 5), OverWatch, Insurgency, Division 2, CoD & FPS VR game developed by myself',
        backgroundImage: `url(/images/bg3.jpeg)`,
    },
    {
        title: '🥫 OwO',
        description: (
            <ul>
                <li>tho being ISFP-T, super outgoing & energetic when with ppl in the correct vibe 🥰</li>
                <li>in pursuit of consistency logically on science & philosophically on life</li>
            </ul>
        ),
        backgroundImage: `url('/images/bg4.jpeg')`
    },
    {
        title: '🎧 Media',
        description: (
            <ul>
                <li>🎬️ TV and Movies: drama films, crime TV shows, or romantic TV shows with pretty actress 😁️</li>
                <li>🎧️ Music: I really like my Sony headphone & its noise isolation feature lol</li>
                <li>🕺🏻 Dance</li>
            </ul>
        ),
        backgroundImage: `url('/images/bg5.jpeg')`
    },
];

// const databaseID = process.env.NOTION_DATABASE_ID

export default function HomePage() {
    const title = Name();
    return (
        <div className={styles.bgContainer}>
            <Head>
                <meta property="og:title" content={title}/>
                <title>{title}</title>
                <meta
                    name="description"
                    // content="Hi, this is Lin, a cute and genuine guy with passion and love! 我是宇宙超级无敌可爱机智の🍑黃桃大罐頭💛"
                    content="Hi, this is Jimmy!"
                />
            </Head>
            <div className={styles.headerContainer}>
                <Navigation isHome={true}/>
                <div className={styles.imageContainer}>
                    <Image
                        priority
                        src="/images/jager.jpeg"
                        className={[
                            utilStyles.borderCircle,
                            styles.headingImage,
                        ].join(" ")}
                        height={162}
                        width={162}
                        alt={Name()}
                    />
                    <div className={styles.headingTextBox}>
                        <Link href={"/"} className={styles.headingTextPrimary}>

                            <Name/>

                        </Link>
                    </div>
                    <Description/>
                </div>



                {/*<Link href={"/blogs"}>*/}
                {/*      <a className={styles.headingTextPrimary}>*/}
                {/*          Blogs.*/}
                {/*      </a>*/}
                {/*</Link>*/}
                {/*<div className={styles.postSummaryContainer}>*/}
                {/*    <span className={styles.postSummaryHeading}>*/}
                {/*        Blog. (Under Construction)*/}
                {/*    </span>*/}
                {/*    {!!pages && pages.map((page) => (*/}
                {/*            <BlogSummary page={page}/>*/}
                {/*        )*/}
                {/*    )}*/}
                {/*    /!*{(!pages || pages.length === 0) && (*!/*/}
                {/*    /!*    <span className={styles.colorWhite}>*!/*/}
                {/*    /!*        *!/*/}
                {/*    /!*    </span>*!/*/}
                {/*    /!*)}*!/*/}
                {/*</div>*/}
                {/*<div className={styles.footageContainer}>*/}
                {/*    Built by Jimmy Lin*/}
                {/*</div>*/}
            </div>
            <CustomCarousel items={hobbies} />
            <div className={styles.aboutContainer}>
                <div id="container" className={styles.aboutContentContainer}>
                    <About/>
                </div>
                <div className={styles.giscusContainer}>
                    <MyGiscus/>
                </div>
                <div className={styles.updatedAtContainer}>
                    <FootageText isHome={true}/>
                </div>
                <ScrollToTop/>
            </div>
        </div>
    );
}

// export async function getStaticProps() {
//     const pagesData = await getDatabase(databaseID)
//     return {
//         props: {
//             pages: pagesData
//         },
//     }
// }