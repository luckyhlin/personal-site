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

        // the prefix is used to identify any links pointing to the git repo
        // which is not a URL
        const localRepoPrefix = "https://localrepo"
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
                        <span className={styles.link}>
                        <Link
                            href={
                                text.link.url.startsWith(localRepoPrefix) ?
                                    text.link.url.slice(localRepoPrefix.length) :
                                    text.link.url
                            }
                            legacyBehavior>{text.content}
                        </Link>
                        </span>
                    :   text.content
                )}
                {!!equation && (
                    <TeX math={equation.expression} />
                )}
            </span>
        );
    });
}