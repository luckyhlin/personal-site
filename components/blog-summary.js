import styles from "./blog-summary.module.scss";
import Link from "next/link";
import {RichText} from "./rich-text";

export default function BlogSummary({page}) {
    return (
        <div className={styles.container} id={page.id}>
            <div className={styles.summaryLastEditedTime}>
                {
                    page.parsed_last_edited_time === page.parsed_created_time ?
                        page.parsed_created_time :
                        page.parsed_last_edited_time.concat(
                            " (updated)")
                }
            </div>
            {
                page.icon ? page.icon.emoji : '🍯'
            }
            <Link href={`/blogs/${page.name}`}>
                <a className={[styles.link, styles.linkColor].join(" ")} style={
                    {display: "inline"}
                }>
                    <RichText richTexts={page.properties.Name.title}/>
                </a>
            </Link>
            {
                !!page.summary &&
                    <div className={styles.summaryDetails}>
                        {page.summary.plain_text}
                    </div>
            }
        </div>
    )
}