import { Client } from "@notionhq/client"

const pageBlockSize = 50

// initialize the notion client
const notion = new Client({
    auth: process.env.NOTION_KEY,
})

export async function getDatabase(databaseID) {
    const response = await notion.databases.query({
        database_id: databaseID,
    })
    return response.results
}

export async function getPageBlocks(pageID) {
    let startCursor = undefined
    let allResponses = [];
    while (true) {
        let response = await notion.blocks.children.list({
            block_id: pageID,
            start_cursor: startCursor,
            page_size: pageBlockSize,
        })
        allResponses.push(...response.results)

        startCursor = response.next_cursor
        if (!response.has_more) {
            break
        }
    }
    return allResponses
}
