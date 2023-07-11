import Layout from "../components/layout";
import styles from "../styles/home.module.scss";
import PostSummary from "../components/post-summary";
import {getDatabase} from "../lib/notion";

const databaseID = process.env.NOTION_DATABASE_ID

export default function Blogs({ pages }) {
    return (
        <Layout>
            <div className={styles.postSummaryContainer}>
                    <span className={styles.postSummaryHeading}>
                        Blog. (Under Construction)
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