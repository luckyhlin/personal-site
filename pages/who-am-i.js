import Layout from "../components/layout";
import styles from "../styles/whoami.module.css"

export default function WhoAmI() {
    let title = "Who Am I"
    return (
        <Layout title={title} useComment={true}>
            <h1>Who Am I (WIP)</h1>
            <div className={styles.paragraph}>
                I am now in a gap year after having
            both received my B.Eng from UMJI-SJTU
            and served as a full-time software engineer in ByteDance for a year.
                {/*I may move on to University of Wisconsin-Madison and pursue*/}
                {/*my M.S. Computer Science degree.*/}
            </div>
            <div className={styles.paragraph}>
                My academic and professional interests lie in computer science,
                specifically high performance systems and artificial intelligence.
                I am also skilled in various sports such as soccer, badminton.
                FPS gaming is also my favorite, like APEX, CSGO, R6 (my avatar is
                a famous character in this game).
            </div>
            <div className={styles.paragraph}>
                These activities usually
                need a team of members to move on, so I wish to meet new friends
                who share similar hobbies with me. Please feel free to reach me
                via `jimmylinh AT icloud DOT com`.
            </div>
        </Layout>
    )
}