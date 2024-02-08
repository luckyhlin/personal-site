import Layout from "../components/layout";
import styles from "../styles/home.module.scss";
import BlogSummary from "../components/blog-summary";
import {getDatabase} from "../lib/notion";
import summaryStyles from "../components/blog-summary.module.scss";

const databaseID = process.env.NOTION_DATABASE_ID

export default function Blogs({ pages }) {
    return (
        <Layout title="Blogs" pageType="isBlogs">
            <div className={styles.blogSummaryContainer}>
                <span className={styles.blogSummaryHeading}>
                    Blogs.
                </span>
                <span className={styles.blogSentenceHeading}>
                    Admit one's ignorance.
                </span>
                <div className={styles.blogSubSentence}>
                    At present, I focus on technical blogs. Hope to update it regularly.
                </div>
                <hr className={summaryStyles.blogSummaryHorizontalLine}/>
                {/*<span className={styles.postSentenceHeading}>*/}
                {/*    Learn to say: I don't know.*/}
                {/*</span>*/}
                {!!pages && pages.map((page) => (
                        !page.metaInfo.is_in_progress &&
                            <BlogSummary page={page}/>
                    )
                )}
                {/*{(!pages || pages.length === 0) && (*/}
                {/*    <span className={styles.colorWhite}>*/}
                {/*        */}
                {/*    </span>*/}
                {/*)}*/}
            </div>
        </Layout>
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