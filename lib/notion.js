import {Client} from "@notionhq/client"

const pageBlockSize = 50

// initialize the notion client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export async function getDatabase(databaseID, isTest) {
    const response = await notion.databases.query({
        database_id: databaseID,
        // filter is used to filter out pages for test usage
        filter: isTest ? {or:[]} : {
            or: [
                {
                    property: "Name",
                    rich_text: {
                        does_not_contain: "Test Usage"
                    }
                }
            ]
        },
        sorts: [
            {
                property: "Last Edited Time",
                direction: "descending"
            }
        ]
    })
    response.results.map((page) => {
        page.name = toCompactName(page.properties.Name?.title[0].plain_text)
        page.summary = page.properties.Summary?.rich_text[0]
        page.parsed_created_time = toCompactTime(page.created_time)
        page.parsed_last_edited_time = toCompactTime(page.last_edited_time)
    })

    return response.results
}

export async function retrievePage(pageID) {
    const response = await notion.pages.retrieve({
        page_id: pageID
    })
    return response
}

export async function getPageTitle(pageID) {
    const response = await retrievePage(pageID)
    if (!response) {
        return null
    }
    if (response.parent.type === "database_id") {
        return response.properties.Name.title[0].plain_text
    }
    return response.properties.title // TODO: Not Sure
}

// Try to get the block along with almost all of its children (via recursively searching)
// except for children blocks either in type of 'child_page' or with too large depth (>10)
export async function getBlocks(blockID, {level}) {
    if (!level) {
        console.error(`level is null or equals to zero, level: ${level}`)
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
            .filter((block) => block.has_children
                && block.type !== "child_page")
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

function toCompactName(name) {
    return name.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
}

function toCompactTime(time) {
    // const date = new Date(time);
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
    // const day = date.getDate();
    //
    // return year.toString().concat(", ", month.toString(), "/", day.toString())
    return new Date(time).toLocaleDateString('default', {
        year: 'numeric', month: 'short', day: '2-digit'
    })
}
