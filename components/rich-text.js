import styles from "./rich-text.module.css"
import Link from "next/link";

export function RichText({ richTexts }) {
    return richTexts.map((value) => {
        const {
            annotations: {bold, code, color, italic, strikethrough, underline},
            text
        } = value
        return (
            <span
                className={[
                    bold ? styles.bold : "",
                    code ? styles.code : "",
                    italic ? styles.italic : "",
                    strikethrough ? styles.strikethrough : "",
                    underline ? styles.underline : "",
                ].join(" ")}
                style={color !== "default" ? { color } : {}}
            >
                {text.link ?
                    <Link href={text.link}>{text.content}</Link>
                    :
                    text.content
                }
            </span>
        )
    })
}