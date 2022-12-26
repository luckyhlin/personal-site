import styles from "./post-summary.module.css";
import Link from "next/link";
import {RichText} from "./rich-text";

export default function PostSummary({page, idKey}) {
    return (
        <div className={styles.container} id={page.id} key={idKey}>
            <Link href={`/posts/${page.id}`}>
                <a className={[styles.link, styles.linkColor].join(" ")}>
                    <RichText richTexts={page.properties.Name.title}/>
                </a>
            </Link>
        </div>
    )
}