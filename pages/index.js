import Link from "next/link";
import styles from "../styles/home.module.scss";
import Description from "../components/description";
import Navigation from "../components/navigation";
import Name from "../components/name.js";
import FootageText from "../components/footage-text";
import Head from "next/head";
import About from "../components/about";
import MyGiscus from "../components/giscus";

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
                    content="Hi, this is Hao Lin!"
                />
            </Head>
            <div className={styles.headerContainer}>
                <Navigation isHome={true}/>
                <div className={styles.headingTextBox}>
                    <Link href={"/"} className={styles.headingTextPrimary}>

                        <Name/>

                    </Link>
                </div>
                <Description/>

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
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContentContainer}>
                    <About/>
                </div>
            </div>
            <div className={styles.giscusContainer}>
                <MyGiscus/>
            </div>
            <div className={styles.updatedAtContainer}>
                <FootageText isHome={true}/>
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