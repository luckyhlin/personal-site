import styles from "./rich-text.module.css"
import Link from "next/link";
import 'katex/dist/katex.min.css';
import TeX from "@matejmazur/react-katex";

export function RichText({ richTexts }) {
    return richTexts.map((value) => {
        const {
            text,
            equation,
            annotations: {bold, code, color, italic, strikethrough, underline},
        } = value
        //
        // const {defaultColor, setDefaultColor} = useState()
        //
        // useEffect(setDefaultColor(color))
        //
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
                {!!text && (
                    text.link ?
                        <Link href={text.link.url}>{text.content}</Link>
                    :   text.content
                )}
                {!!equation && (
                    <TeX math={equation.expression} />
                )}
            </span>
        )
    })
}