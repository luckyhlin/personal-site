import {getDatabase} from "../../lib/notion.js";
import Layout from "../../components/layout";
import Link from "next/link";
import {RichText} from "../../components/rich-text";

const databaseID = process.env.NOTION_DATABASE_ID

export default function NotionTestPost({pages}) {
    return (
        <Layout>
            <ol>
                {
                    pages ? pages.map((page) => {
                        return (
                            <li key={page.id}>
                                <Link href={`/posts/${page.id}`}>
                                    <a>
                                        <RichText richTexts={page.properties.Name.title}/>
                                    </a>
                                </Link>
                            </li>
                        )
                    }) : {}
                }
            </ol>
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
