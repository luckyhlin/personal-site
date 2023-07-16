import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.scss";

export default function FootageText({ isHome }) {
    return (
        <>
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
    )
}