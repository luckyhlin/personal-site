import Layout from "../components/layout";
import styles from "../styles/about.module.css"
import Description from "../components/description";

export default function About() {
    let title = "About"
    return (
        <Layout title={title} useComment={true}>

            <div className={styles.aboutContainer}>
                updated at {new Date(Date.now()).toLocaleDateString('default', {
                    year: "numeric", month: "short", day: "2-digit"
            })}
                <h1>University & Company</h1>
                <div className={styles.aboutParagraph}>
                    I am going to pursue my master degree in computer science (MSCS) at University of Wisconsin–Madison! (◍•ᴗ•◍)
                </div>
                <div className={styles.aboutParagraph}>
                    Before that, I have received my B.Eng in electrical and computer engineering (ECE) and a data science minor degree
                    at Shanghai Jiao Tong University. After bachelor's graduation, I worked at ByteDance for a year as an SDE, and then took a gap (now reaching the end of this gap year).
                </div>
                <h1>Interest</h1>
                <div className={styles.aboutParagraph}>
                    My current career interest lies in computer systems and K-12 education, while my previous experiences, though preliminary, varies among many fields,
                    including:
                    <ul className={styles.aboutList}>
                        <li>web development (specifically backend & algorithm engineering),</li>
                        <li>artificial intelligence (specifically deep reinforcement learning),</li>
                        <li>mechatronics (such as food 3D printer, quadcopter drone & ECG),</li>
                        <li>computer science education for K-12 students,</li>
                        <li>mathematics (such as mathematical analysis, discrete math, bayesian analysis & BEM),</li>
                        <li>many other EECS fields (such as computer architecture, game programming & semiconductor),</li>
                        <li>and competitive programming (i.e. data structure & algorithm contests, specifically NOIP & NOI winter camp).</li>
                    </ul>
                </div>
                <div className={styles.aboutParagraph}>
                    Apart from academic, I am embracing the diversity and beauty of life:
                    <ul className={styles.aboutList}>
                        <li>lots of sports (specifically biking, soccer, eight-ball pool, badminton, table tennis, tennis & frisbee)</li>
                        <li>video clipping</li>
                        <li>gaming (specifically FPS games)</li>
                        <li>musics (I mean listening to musics LOL)</li>
                        <li>art gallery</li>
                        <li>travelling (prefer natural scenery)</li>
                        <li>movies & TV dramas</li>
                        <li>dating (awaiting the presence of my girl (◍•ᴗ•◍))</li>
                        <li>and a lot more</li>
                    </ul>
                </div>
                To know more about me, see my resume and visit my instagram (or even my WeChat)
            </div>
            {/*<div className={styles.paragraph}>*/}
            {/*    I am now in a gap year after having*/}
            {/*both received my B.Eng from UMJI-SJTU*/}
            {/*and served as a full-time software engineer in ByteDance for a year.*/}
            {/*    /!*I may move on to University of Wisconsin-Madison and pursue*!/*/}
            {/*    /!*my M.S. Computer Science degree.*!/*/}
            {/*</div>*/}
            {/*<div className={styles.paragraph}>*/}
            {/*    My academic and professional interests lie in computer science,*/}
            {/*    specifically high performance systems and artificial intelligence.*/}
            {/*    I am also skilled in various sports such as soccer, badminton.*/}
            {/*    FPS gaming is also my favorite, like APEX, CSGO, R6 (my avatar is*/}
            {/*    a famous character in this game).*/}
            {/*</div>*/}
            {/*<div className={styles.paragraph}>*/}
            {/*    These activities usually*/}
            {/*    need a team of members to move on, so I wish to meet new friends*/}
            {/*    who share similar hobbies with me. Please feel free to reach me*/}
            {/*    via `jimmylinh AT icloud DOT com`.*/}
            {/*</div>*/}
        </Layout>
    )
}