import styles from "./description.module.css"
import Link from "next/link";

export default function Description() {
    return (
        <>
                <span className={styles.headingTextDescription}>
                    I am now in a gap year after having both received my B.Eng from <span
        className={styles.textInlineBox}>
                        <Link href="https://www.ji.sjtu.edu.cn/">
                            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>UMJI-SJTU</a>
                        </Link>
                    </span> and served as a full-time software engineer in <span className={styles.textInlineBox}>
                        <Link href="https://www.bytedance.com/en/">
                            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>ByteDance</a>
                        </Link>
                    </span> for a year.
                </span>
                <span className={styles.headingTextDescription}>
                    If necessary, reach me via <span className={styles.textInlineBox}>
                        <Link href="mailto:jimmylinh@icloud.com">
                            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>jimmylinh@icloud.com</a>
                        </Link>
                    </span>
                </span>
        </>
    )
}