import Layout from "../components/layout";
import styles from "../styles/home.module.scss";
import BlogSummary from "../components/blog-summary";
import {getDatabase} from "../lib/notion";

const databaseID = process.env.NOTION_DATABASE_ID

export default function Blogs({ pages }) {
    return (
        <Layout title="Blogs">
            <div className={styles.postSummaryContainer}>
                <span className={styles.postSummaryHeading}>
                    Blogs.
                </span>
                <span className={styles.postSentenceHeading}>
                    Admit one's ignorance
                </span>
                {!!pages && pages.map((page) => (
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