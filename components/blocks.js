import {RichText} from "./rich-text";
import styles from "./blocks.module.css"

// blocks: array of blocks (each block may contain its children)
export default function Blocks({ blocks }) {
    if (!blocks) return null
    return blocks.map((block, index, blocks) =>
        <Block block={block} index={index} blocks={blocks}/>
    )
}

export function Block({ block, index, blocks }) {
    if (!block || block.object !== "block") {
        const warningMsg = "block is null, or the 'object' value is not 'block'"
        console.warn(warningMsg)
        return <div>❌ {warningMsg}</div>
    }
    if (!block.type) {
        const warningMsg = "the block does not contain 'type'"
        console.warn(warningMsg)
        return <div>❌ {warningMsg}</div>
    }
    const content = block[block.type]
    const { id, has_children, children, level } = block
    const isTopLevel = level === 1

    switch (block.type) {
        case "paragraph":
            return (
                <div>
                    <RichText richTexts={content.rich_text}/>
                    {has_children && (
                        <div className={styles.blockChildren}>
                            <Blocks blocks={children}/>
                        </div>
                    )}
                </div>
            )
        case "heading_1":
            return (
                <h1>
                    <RichText richTexts={content.rich_text}/>
                </h1>
            )
        case "heading_2":
            return (
                <h2>
                    <RichText richTexts={content.rich_text}/>
                </h2>
            )
        case "heading_3":
            return (
                <h3>
                    <RichText richTexts={content.rich_text}/>
                </h3>
            )
        case "callout":
            return callout(block)
        case "quote":
            return quote(block)
        case "bulleted_list_item":
            return (
                <ul className={isTopLevel ? styles.blockTopLevelList : ""}>
                    <li>
                        <RichText richTexts={content.rich_text}/>
                        {has_children && (
                            <div className={styles.blockChildren}>
                                <Blocks blocks={children}/>
                            </div>
                        )}
                    </li>
                </ul>
            )
        case "numbered_list_item":
            const start = getIndexWithinGroup(id, blocks)
            return (
                <ol start={start} className={isTopLevel ? styles.blockTopLevelList : ""}>
                    <li>
                        <RichText richTexts={content.rich_text}/>
                        {has_children && (
                            <div className={styles.blockChildren}>
                                <Blocks blocks={children}/>
                            </div>
                        )}
                    </li>
                </ol>
            )
        case "to_do":
            return to_do(block)
        case "toggle":
            return toggle(block)
        case "code":
            return code(block)
        default:
            return <div>❌ Unsupported Block Type {block.type}</div>
    }
}

function getIndexWithinGroup(id, blocks) {
    const overallIndex = blocks.findIndex((block) => block.id === id) // guaranteed to find the index
    const type = blocks[overallIndex].type
    let groupIndex = 1
    for (let curIndex = overallIndex - 1; curIndex >= 0; curIndex--) {
        if (blocks[curIndex].type !== type) {
            break
        }
        groupIndex ++
    }
    return groupIndex
}

export function callout(block) {
    return (
        <p>
            <RichText richTexts={block.callout.rich_text}/>
        </p>
    )
}

export function quote(block) {
    return (
        <p>
            <RichText richTexts={block.quote.rich_text}/>
        </p>
    )
}

export function to_do(block) {
    return (
        <p>
            <RichText richTexts={block.to_do.rich_text}/>
        </p>
    )
}

export function toggle(block) {
    return (
        <p>
            <RichText richTexts={block.toggle.rich_text}/>
        </p>
    )
}

export function code(block) {
    return (
        <p>
            <RichText richTexts={block.code.rich_text}/>
        </p>
    )
}



