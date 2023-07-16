import UpdatedAt from "./updatedAt";
import Name from "./name";
import Link from "next/link";
import styles from "./footage-text.module.css";

export default function FootageText({ lightColor }) {
    return (
        <>
            built by <Name/> with <Link href="/about#Motivation">
                <a className={
                    lightColor ? styles.lightFootageColor : styles.darkFootageColor}>
                Love
                </a>
            </Link>
            <UpdatedAt lightColor={lightColor}/>
        </>
    )
}