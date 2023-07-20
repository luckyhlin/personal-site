import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation({ isHome }) {
    return (
        <nav className={[
            styles.navigation,
            isHome ? styles.homeNavigation : "",
            ].join(" ")
        }>
            { !isHome &&
                <Link href="/">
                    <a className={styles.navDynamicText}>
                        Home
                    </a>
                </Link>
            }
            <Link href="/about">
                <a>
                    About
                </a>
            </Link>
            <Link href="/blogs">
                <a>
                    Blogs
                </a>
            </Link>
            <Link href="/resume.pdf">
                <a>Resume</a>
            </Link>
        </nav>
    )
}