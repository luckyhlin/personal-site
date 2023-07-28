import Link from "next/link";
import styles from "./navigation.module.scss";

export default function Navigation({ isHome, isAbout, isBlogs }) {
    return (
        <nav className={[
            styles.navigation,
            isHome ? styles.homeNavigation : "",
            ].join(" ")
        }>
            { !isHome &&
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
            }
            <Link href="/about">
                { isAbout ? <a className={styles.navDynamicText}>About</a> :
                    <a>About</a>
                }
            </Link>
            <Link href="/blogs">
                { isBlogs ? <a className={styles.navDynamicText}>Blogs</a> :
                    <a>Blogs</a>
                }
            </Link>
            <a href="/resume.pdf">Resume</a>
        </nav>
    )
}