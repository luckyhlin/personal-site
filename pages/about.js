import Layout from "../components/layout";
import styles from "../styles/about.module.scss"
import descriptionStyles from "../components/description.module.scss"
import Link from "next/link";
import UpdatedAt from "../components/updatedAt";

export default function About() {
    let title = "About"
    return (
        <Layout title={title} useComment={true}>

            <div className={styles.aboutContainer}>
                <UpdatedAt/>
                <div className={styles.aboutIntroParagraph}>
                Hi, this is Hao Lin, a cute and genuine young man grew up in Shanghai, China.
                </div>
                <div className={styles.aboutIntroParagraph}>
                    Welcome to my site!
                </div>
                <h1 className={styles.aboutHeading}>Education & Career</h1>
                <div className={styles.aboutParagraph}>
                    I am going to pursue my master's degree in computer science (MSCS) at <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.wisc.edu/">
                            <a className={[descriptionStyles.textLink].join(" ")}>University of Wisconsin–Madison</a>
                        </Link>
                    </span> (◍•ᴗ•◍)
                </div>
                <div className={styles.aboutParagraph}>
                    Before that, I have received my B.Eng in electrical and computer engineering (ECE) and a data science minor degree
                    at <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.ji.sjtu.edu.cn/">
                            <a className={[descriptionStyles.textLink].join(" ")}>Shanghai Jiao Tong University (UMJI-SJTU Joint Institute).</a>
                        </Link>
                    </span>
                </div>
                <div className={styles.aboutParagraph}>
                    After bachelor's graduation, I worked at <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.www.bytedance.com/en/">
                            <a className={[descriptionStyles.textLink].join(" ")}>ByteDance</a>
                        </Link>
                    </span> for a year as an SDE, and then took a gap (now reaching the end of this gap year).
                </div>
                <h1 className={styles.aboutHeading}>Interest</h1>
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
                    Apart from the academic, I am embracing the diversity and beauty of life through:
                    <ul className={styles.aboutList}>
                        <li>lots of sports (specifically biking, soccer, eight-ball pool, badminton, table tennis, tennis & frisbee)</li>
                        <li>gaming (specifically FPS games)</li>
                        <li>musics (I mean listening to musics LOL)</li>
                        <li>art gallery</li>
                        <li>travelling (prefer natural scenery)</li>
                        <li>movies & TV dramas</li>
                        <li>video clipping & photography</li>
                        <li>staying with family, friends & her (◍•ᴗ•◍)</li>
                        <li>and a lot more</li>
                    </ul>
                </div>
                To know more about me, you are free to check my <Link href="/resume.pdf">
                    <a>resume</a>
            </Link>, or contact me via <Link href="mailto:jimmylinh@icloud.com">
                <a>email</a>
            </Link>.
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