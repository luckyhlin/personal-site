import {getBlocks, getDatabase, getPageTitle} from "../lib/notion";
import Layout from "../components/layout";
import * as util from "util";
import styles from "../styles/blogs.module.css"
import Blocks from "../components/blocks";

export default function ToMinhan({title, blocks}) {
    return (
        <Layout title={title} useComment={false} isPrivate={true}>
            This is a private page. No worry for your privacy leakage.
            <h1 id={title} className={styles.postTitle}>
                {title}
            </h1>
            <Blocks blocks={blocks}/>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const pages = await getDatabase(process.env.NOTION_DATABASE_ID, null, true)
//     return {
//         paths: pages.map((page) => {
//             return {
//                 params: {
//                     privateName: page.name
//                 }
//             }
//         }),
//         fallback: false
//     }
// }

export async function getStaticProps({ }) {
    // const { privateName: pageName } = params
    const pageName = 'to-minhan';
    const pages = await getDatabase(process.env.NOTION_DATABASE_ID, null, true)
    const pageID = pages.find((page) =>
        page.name === pageName
    ).id
    const title = await getPageTitle(pageID)
    console.log(title)
    const blocks = await getBlocks(pageID, {
        level: 1
    })
    console.log(util.inspect(blocks.slice(-15), {depth: null, colors: true}))
    // console.log(util.inspect(blocks[23], {depth: null, colors: true}))

    return {
        props: {
            title: title,
            blocks: blocks
        }
    }
}