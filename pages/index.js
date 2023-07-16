import Link from "next/link";
import styles from "../styles/home.module.scss";
import Description from "../components/description";
import Navigation from "../components/navigation";
import Name from "../components/name.js";
import FootageText from "../components/footage-text";

// const databaseID = process.env.NOTION_DATABASE_ID

export default function HomePage() {
    return (
        <div className={styles.bgContainer}>
            <div className={styles.mainContainer}>
                <Navigation isHome={true}/>
                <div className={styles.headingTextBox}>
                    <Link href={"/about"}>
                        <a className={styles.headingTextPrimary}>
                            <Name/>
                        </a>
                    </Link>
                    <Description/>
                    <div className={styles.updatedAtContainer}>
                        <FootageText lightColor={true}/>
                    </div>
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
        </div>
            // {/*<Layout>*/}
            // {/*<h1>*/}
            // {/*    Read <Link href="/blogs/first-post">this page</Link>!*/}
            // {/*</h1>*/}
            // {/*<section className={utilStyles.headingXl}>*/}
            // {/*    <Link href="/blogs/notion-test-post">Notion Database Page Content</Link>*/}
            // {/*</section>*/}
            // {/*<section className={utilStyles.headingMd}>*/}
            // {/*    <div>*/}
            // {/*        <button onClick={handleClick}>{clickCounter}</button>*/}
            // {/*        <button onClick={resetClick}>Press to reset the click counter</button>*/}
            // {/*    </div>*/}
            // {/*    <Image*/}
            // {/*        src="/images/img.png"*/}
            // {/*        height={144}*/}
            // {/*        width={144}*/}
            // {/*        alt="WhiteImg"*/}
            // {/*    />*/}
            // {/*    <p>Hello</p>*/}
            // {/*</section>*/}
            // {/*<section className={utilStyles.headingMd}>*/}
            // {/*    <Link href="/blogs/Post">Blocks</Link>*/}
            // {/*</section>*/}
            // {/*</Layout>*/}
    )
}

// export async function getStaticProps() {
//     const pagesData = await getDatabase(databaseID)
//     return {
//         props: {
//             pages: pagesData
//         },
//     }
// }