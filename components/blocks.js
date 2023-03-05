import {RichText} from "./rich-text";
import styles from "./blocks.module.css"
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from "react-syntax-highlighter/dist/cjs/styles/prism";

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
                <div className={styles.blockParagraph} key={id} >
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
                <h2 key={id} className={styles.blockHeading1}>
                    <RichText richTexts={content.rich_text}/>
                </h2>
            )
        case "heading_2":
            return (
                <h3 key={id} className={styles.blockHeading2}>
                    <RichText richTexts={content.rich_text}/>
                </h3>
            )
        case "heading_3":
            return (
                <h4 key={id} className={styles.blockHeading3}>
                    <RichText richTexts={content.rich_text}/>
                </h4>
            )
        case "callout":
            return (
                <div className={styles.blockCallout}>
                    <div className={styles.blockCalloutIcon}>
                        {block.callout.icon.emoji}
                    </div>
                    <div className={styles.blockCalloutText}>
                        <RichText richTexts={block.callout.rich_text}/>
                    </div>
                </div>
            )
        case "quote":
            return (
                <div className={styles.blockQuote}>
                    <RichText richTexts={block.quote.rich_text}/>
                </div>
            )
        case "bulleted_list_item":
            return (
                <ul className={isTopLevel ?
                    styles.blockTopLevelList :
                    styles.blockNonTopLevelList
                }>
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
                <ol start={start} className={isTopLevel ?
                    styles.blockTopLevelList :
                    styles.blockNonTopLevelList
                }>
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
            return (
                <div>
                    <label htmlFor={id}>
                        <input
                            type="checkbox"
                            id={id}
                            defaultChecked={content.checked}
                            readOnly
                        />
                         {/*TODO*/}
                        ❌
                        <RichText richTexts={content.rich_text}/>
                    </label>
                </div>
            )
        case "toggle":
            return (
                <details className={styles.blockToggle}>
                    <summary>
                        <RichText richTexts={content.rich_text}/>
                    </summary>
                    {children && (
                        <div className={styles.blockChildren}>
                            <Blocks blocks={children}/>
                        </div>
                    )}
                </details>
            )
        case "code":
            // To solve unmatched language names, add a conversion to the map. Find supported Prism names here:
            // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
            const prismLanguageMap = {
            }
            let language = content.language
            if (language in prismLanguageMap) language = prismLanguageMap[language]
            const customStyle = {
                borderRadius: "0.5rem",
                background: "linear-gradient(143deg, rgb(255 253 141 / 50%) 0%, rgb(0 0 0 / 0%) 20%, rgb(252 183 255 / 30%) 75%, rgb(144 236 255) 100%)",

            }
            const lineNumberStyle = {
                textAlign: 'right',
                color: 'rgb(169,169,169)',
                marginLeft: '-0.5em',
                paddingRight: '1em',
                minWidth: '2.25em'
            }

            return (
                // <div className={styles.blockCode} key={id}>
                //     {
                //         content.rich_text.map((rt) => {
                //             return rt.text.content.replace
                //         })
                //     }
                // </div>
                <SyntaxHighlighter language={language}
                                   style={solarizedlight}
                                   customStyle={customStyle}
                                   showLineNumbers={true}
                                   showInlineLineNumbers={true}
                                   lineNumberStyle={lineNumberStyle}
                                   wrapLines={true}
                >
                    {
                        content.rich_text.map((rt) => {
                            return rt.text.content
                        })
                    }
                </SyntaxHighlighter>
            )
        case "image":
            const src = content.type === "external" ?
                content.external.url :
                content.file.url
            const caption = content.caption ?
                content.caption[0]?.plain_text :
                ""
            return (
                <figure>
                    <img src={src}
                         alt={caption}
                         key={id}
                         className={styles.blockImg}
                    />
                    {caption &&
                        <figcaption>
                            {caption}
                        </figcaption>
                    }
                </figure>
            )
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

