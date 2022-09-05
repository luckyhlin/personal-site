import { Client } from "@notionhq/client"
import { getPageBlocks } from "../../lib/notion"
import * as util from "util";

const notion = new Client({
    auth: process.env.NOTION_KEY,
});

// (async () => {
//     const response = await notion.databases.query({
//         database_id: process.env.NOTION_DATABASE_ID,
//     })
//
//     console.log(util.inspect(response.results, {depth: null, colors: true}))
//     console.log(response.results.map((post) => {
//         return post.properties.Name.title
//     }))
// })();

// (async () => {
//     const response = await notion.pages.retrieve({
//         page_id: "bb59fe59-842c-46f1-9f4b-94f40bbd75e5",
//     })
//
//     console.log(util.inspect(response, {depth: null, colors: true}))
// })();

// (async () => {
//     const response = await notion.blocks.retrieve({
//         block_id: "bb59fe59-842c-46f1-9f4b-94f40bbd75e5",
//     })
//     console.log(util.inspect(response, {depth: null, colors: true}))
// })();

// (async () => {
//     const response = await notion.blocks.children.list({
//         block_id: "bb59fe59-842c-46f1-9f4b-94f40bbd75e5",
//     })
//     console.log(util.inspect(response, {depth: null, colors: true}))
// })();

(async () => {
    const response = await getPageBlocks("bb59fe59-842c-46f1-9f4b-94f40bbd75e5")
    console.log(util.inspect(response, {depth: null, colors: true}))
})();

