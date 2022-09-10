import Link from "next/link";
import Image from "next/image";
import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import {getDatabase} from "../lib/notion";
import PostSummary from "../components/post-summary";

const databaseID = process.env.NOTION_DATABASE_ID

export default function HomePage({pages}) {
    return (
        <div className={styles.bgContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.headingTextBox}>
                    <span className={styles.headingTextPrimary}>
                        Jimmy Lin
                    </span>
                    <span className={styles.headingTextDescription}>
                        I am now in a gap year after having both received my B.Eng from <span className={styles.textInlineBox}>
                            <Link href="https://www.ji.sjtu.edu.cn/">
                                <a className={[styles.textLink, styles.textLinkColor].join(" ")}>UMJI-SJTU</a>
                            </Link>
                        </span> and served as a full-time software engineer in <span className={styles.textInlineBox}>
                            <Link href="https://www.bytedance.com/en/">
                                <a className={[styles.textLink, styles.textLinkColor].join(" ")}>ByteDance</a>
                            </Link>
                        </span> for a year.
                    </span>
                </div>
                <div className={styles.postSummaryContainer}>
                    <span className={styles.postSummaryHeading}>
                        Blog.
                    </span>
                    {!!pages && pages.map((page) => (
                            <PostSummary page={page}/>
                        )
                    )}
                    {/*{(!pages || pages.length === 0) && (*/}
                    {/*    <span className={styles.colorWhite}>*/}
                    {/*        */}
                    {/*    </span>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
            // {/*<Layout>*/}
            // {/*<h1>*/}
            // {/*    Read <Link href="/posts/first-post">this page</Link>!*/}
            // {/*</h1>*/}
            // {/*<section className={utilStyles.headingXl}>*/}
            // {/*    <Link href="/posts/notion-test-post">Notion Database Page Content</Link>*/}
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
            // {/*    <Link href="/posts/Post">Blocks</Link>*/}
            // {/*</section>*/}
            // {/*</Layout>*/}
    )
}

export async function getStaticProps() {
    const pagesData = await getDatabase(databaseID)
    return {
        props: {
            pages: pagesData
        },
    }
}