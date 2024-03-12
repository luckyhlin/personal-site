import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.scss";

export default function FootageText({ isHome, isPrivate }) {
    return <>
        { isPrivate ? <>
                <div>
                    Yours,
                </div>
                Sincerely written by <Link href="/about#Love" className={styles.footageDynamicText}>

            <Name/>

        </Link>
        </>
        : <>
            built by <Name/> with <Link
            href="/about#Love"
            className={
                // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                isHome ? styles.footageRainbowText : styles.footageDynamicText
            }>
            
                Love
            
            </Link>
            <UpdatedAt lightColor={isHome}/>
        </>
        }
    </>;
}