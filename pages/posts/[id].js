import {getBlocks, getDatabase, getPageTitle} from "../../lib/notion";
import Layout from "../../components/layout";
import * as util from "util";
import styles from "../../styles/posts.module.css"
import Blocks from "../../components/blocks";
import {getPage} from "@notionhq/client/build/src/api-endpoints";

export default function Post({title, blocks}) {
    return (
        <Layout>
            <title title={title}/>
            <h1 id={title} className={styles.postTitle}>
                {title}
            </h1>
            <Blocks blocks={blocks}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const pages = await getDatabase(process.env.NOTION_DATABASE_ID)
    return {
        paths: pages.map((page) => {
            return {
                params: {
                    id: page.id
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id: pageID } = params
    const title = await getPageTitle(pageID)
    console.log(title)
    const blocks = await getBlocks(pageID, {
        level: 1
    })
    console.log(util.inspect(blocks.slice(-5), {depth: null, colors: true}))
    console.log(util.inspect(blocks[23], {depth: null, colors: true}))

    return {
        props: {
            title: title,
            blocks: blocks
        }
    }
}