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
            <Link href="/blogs">
                <a>
                    Blogs
                </a>
            </Link>
            <Link href="/about">
                <a>
                    About
                </a>
            </Link>
            <Link href="/resume">
                <a>
                    Resume
                </a>
            </Link>
        </nav>
    )
}