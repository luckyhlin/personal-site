import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.scss";

export default function FootageText({ isHome, isPrivate }) {
    return (
        <>
            { isPrivate ? <>
                    <div>
                        Yours,
                    </div>
                    Sincerely written by <Link href="/about#Love">
                    <a className={styles.footageDynamicText}>
                        <Name/>
                    </a>
                    </Link>
            </>
            : <>
                built by <Name/> with <Link href="/about#Love">
                <a className={
                    // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                    isHome ? styles.footageRainbowText : styles.footageDynamicText
                }>
                    Love
                </a>
                </Link>
                <UpdatedAt lightColor={isHome}/>
            </>
            }
        </>
    )
}