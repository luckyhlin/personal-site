import {Client} from "@notionhq/client"

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

export async function getBlocks(blockID, {level}) {
    if (!level) {
        console.error("level is null")
        return null
    }
    if (!!level && level > 10) {
        console.error("level exceeds limit (10), there may exist bugs")
        return null
    }
    let curBlocks = await getBlocksWithoutChildren(blockID)

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
        curBlocks
            .filter((block) => block.has_children && block.type !== "child_page")
            .map(async (block) => {
                return {
                    id: block.id,
                    children: await getBlocks(block.id, {level: level + 1})
                }
            })
    )
    return curBlocks.map((block) => {
        // Add child blocks if the block should contain children but none exists
        if (block.has_children && !block.children) {
            block.children = childBlocks.find(
                (x) => x.id === block.id
            )?.children
            if (block.children === undefined) block.children = null
        }
        block.level = level
        return block
    })
}

async function getBlocksWithoutChildren(blockID) {
    let startCursor = undefined
    let allBlocks = [];
    while (true) {
        let response = await notion.blocks.children.list({
            block_id: blockID,
            start_cursor: startCursor,
            page_size: pageBlockSize,
        })
        allBlocks.push(...response.results)

        startCursor = response.next_cursor
        if (!response.has_more) {
            break
        }
    }
    return allBlocks
}
