import {getBlocks, getDatabase, getPageMetaInfo} from "../lib/notion";
import Layout from "../components/layout";
import styles from "../styles/blogs.module.scss"
import Blocks from "../components/blocks";
import BlogInfo from "../components/blog-info";

export default function Private({title, blocks, metaInfo}) {
    return (
        <Layout title={title} useComment={false} isPrivate={true}>
            {/*No links pointing to this page. It is a more private page.*/}
            <h1 id={title} className={styles.postTitle}>
                {title}
            </h1>
            <BlogInfo metaInfo={metaInfo} isDetail={true}/>
            <hr className={styles.blogHorizontalLine}/>
            <Blocks blocks={blocks}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const pages = await getDatabase(process.env.NOTION_DATABASE_ID, null, true)
    return {
        paths: pages.map((page) => {
            return {
                params: {
                    private: page.name
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { private: pageName } = params
    const pages = await getDatabase(process.env.NOTION_DATABASE_ID, null, true)
    const pageID = pages.find((page) =>
        page.name === pageName
    ).id
    const {title, metaInfo} = await getPageMetaInfo(pageID)
    console.log("private: ", title)
    const blocks = await getBlocks(pageID, {
        level: 1
    })
    // console.log(util.inspect(blocks.slice(-15), {depth: null, colors: true}))
    // console.log(util.inspect(blocks[23], {depth: null, colors: true}))

    return {
        props: {
            title: title,
            blocks: blocks,
            metaInfo: metaInfo,
        }
    }
}