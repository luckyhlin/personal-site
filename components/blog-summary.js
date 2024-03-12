import styles from "./blog-summary.module.scss";
import Link from "next/link";
import {RichText} from "./rich-text";
import BlogInfo from "./blog-info";

export default function BlogSummary({page}) {
    return (
        <div className={styles.container} id={page.id}>
            <BlogInfo metaInfo={page.metaInfo}/>
            {
                page.icon ? page.icon.emoji.concat(" ") : '🍯 '
            }
            <Link
                href={`/blogs/${page.name}`}
                className={[styles.link, styles.linkColor].join(" ")}
                style={
                    {display: "inline"}
                }>

                <RichText richTexts={page.properties.Name.title}/>

            </Link>
            {
                !!page.summary &&
                    <div className={styles.summaryDetails}>
                        {page.summary.plain_text}
                    </div>
            }
            <hr className={styles.blogSummaryHorizontalLine}/>
        </div>
    );
}