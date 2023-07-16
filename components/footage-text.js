import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.scss";

export default function FootageText({ lightColor }) {
    return (
        <>
            built by <Name/> with <Link href="/about#Love">
                <a className={
                    // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                    styles.footageRainbowText
                }>
                Love
                </a>
            </Link>
            <UpdatedAt lightColor={lightColor}/>
        </>
    )
}