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
                    
                        Home
                    
                </Link>
            }
            <Link href="/about" legacyBehavior>
                { isAbout ? <a className={styles.navDynamicText}>Profile</a> :
                    isHome ? <a>Hao's Profile</a> :
                        <a>Profile</a>
                }
            </Link>
            <Link href="/blogs" legacyBehavior>
                { isBlogs ? <a className={styles.navDynamicText}>Blogs</a> :
                    <a>Blogs</a>
                }
            </Link>
            <a href="/resume.pdf">{isHome ? "CV" : "Resume"}</a>
        </nav>
    );
}