import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.scss";

export default function FootageText({ isHome, isPrivate }) {
    return <>
        { isPrivate ? <>
                {/*<div>*/}
                {/*    Yours,*/}
                {/*</div>*/}
                {/*Sincerely written by <Link href="/about#Love" className={styles.footageDynamicText}>*/}
                {/* <Name/>*/}
                {/*</Link>*/}
            <UpdatedAt lightColor={isHome}/>
            by <Name/>
        </>
        : <>
            built by <Name/> with <Link
            href="/#Love"
            className={
                // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                isHome ? styles.footageRainbowText : styles.footageDynamicText
            }>
            
                Love
            
            </Link> & <Link href="/blogs"
                           className={
                // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                isHome ? styles.footageRainbowText : styles.footageDynamicText
            }>Curiosity</Link>
            {/*    & <Link*/}
            {/*    href="https://github.com/luckyhlin/personal-site"*/}
            {/*    className={*/}
            {/*    // lightColor ? styles.lightFootageColor : styles.darkFootageColor}>*/}
            {/*    isHome ? styles.footageRainbowText : styles.footageDynamicText*/}
            {/*}>Open-Source</Link>*/}
            <UpdatedAt lightColor={isHome}/>
        </>
        }
    </>;
}