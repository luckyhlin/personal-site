import styles from "../styles/errors.module.scss";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className={styles.errors404Container}>
            <Link href="/">

                <div title="404 - Page Not Found" className={styles.errors404}>
                    404 - Page Not Found
                </div>
                <div title="Click Here to Home Page" className={styles.errors404}>
                    Click Here to Home Page
                </div>

            </Link>
        </div>
    );
}