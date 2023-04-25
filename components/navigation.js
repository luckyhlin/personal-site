import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation({}) {
    return (
        <nav className={styles.navigation}>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            <Link href="/who-am-i">
                <a>
                    Who Am I
                </a>
            </Link>
        </nav>
    )
}