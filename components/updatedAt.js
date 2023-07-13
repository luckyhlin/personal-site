import styles from "./updatedAt.module.scss";

export default function UpdatedAt({ lightColor }) {
    return (
        <div className={[
            styles.container,
            lightColor ? styles.lightColor : styles.darkColor,
            ].join(" ")
        }>
            site updated at {new Date(Date.now()).toLocaleDateString('default', {
            year: "numeric", month: "short", day: "2-digit"
        })}
        </div>
    )
}