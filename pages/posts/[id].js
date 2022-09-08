import {getBlocks, getDatabase} from "../../lib/notion";
import Layout from "../../components/layout";
import * as util from "util";
import Blocks from "../../components/blocks";

export default function Post({blocks}) {
    return (
        <Layout>
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
    const { id } = params
    const blocks = await getBlocks(id, {
        level: 1
    })

    console.log(util.inspect(blocks.slice(-5), {depth: null, colors: true}))
    console.log(util.inspect(blocks[23], {depth: null, colors: true}))

    return {
        props: {
            blocks: blocks
        }
    }
}