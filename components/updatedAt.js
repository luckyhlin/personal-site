import styles from "./updatedAt.module.scss";

export default function UpdatedAt({ lightColor }) {
    return (
        <div className={[
            styles.container,
            lightColor ? styles.lightColor : styles.darkColor,
            ].join(" ")
        }>
            site updated at {process.env.BUILD_TIME}
        </div>
    )
}