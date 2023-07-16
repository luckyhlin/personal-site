import Layout from "../components/layout";
import styles from "../styles/about.module.scss"
import descriptionStyles from "../components/description.module.scss"
import Link from "next/link";
import Name from "../components/name";

export default function About() {
    let title = "About " + Name()
    return (
        <Layout title={title} useComment={true}>

            <div className={styles.aboutContainer}>
                <div className={styles.aboutIntroParagraph}>
                Hi, this is <Name/>, a cute and genuine young man who grew up in China.
                </div>
                <div className={styles.aboutParagraph}>
                    Welcome to my site! At present, it focuses mostly on technical blogs, written in a blend of
                    English (in the majority), Simplified Chinese (简体中文) and Traditional Chinese (繁體中文).
                </div>
                <h1 className={styles.aboutHeading}>Education & Career</h1>
                <div className={styles.aboutParagraph}>
                    I am going to pursue my master's degree in computer science (MSCS) at the <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.wisc.edu/">
                            <a className={[descriptionStyles.textLink].join(" ")}>University of Wisconsin–Madison</a>
                        </Link>
                    </span> (◍•ᴗ•◍)
                </div>
                <div className={styles.aboutParagraph}>
                    Before that, I received my B.Eng. in electrical and computer engineering (ECE) and a data science minor degree
                    at <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.ji.sjtu.edu.cn/">
                            <a className={[descriptionStyles.textLink].join(" ")}>Shanghai Jiao Tong University (UM-SJTU Joint Institute).</a>
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
                    My current academic interest lies in computer systems and K-12 education, while my previous experiences, though may preliminary, varies among many fields,
                    including:
                    <ul className={styles.aboutList}>
                        <li>web development (specifically backend & algorithm engineering),</li>
                        <li>artificial intelligence (specifically deep reinforcement learning),</li>
                        <li>mechatronics (such as robots, food 3D printers, quadcopter drones & ECG),</li>
                        <li>computer science education for K-12 students,</li>
                        <li>mathematics (such as mathematical analysis with honors, discrete math, bayesian analysis & BEM),</li>
                        <li>many other EECS fields (such as computer architecture, game programming & semiconductor),</li>
                        <li>and competitive programming (i.e. data structure & algorithm contests, specifically NOIP & NOI winter camp).</li>
                    </ul>
                </div>
                <div className={styles.aboutParagraph}>
                    Apart from academics, I am embracing the diversity and beauty of life through:
                    <ul className={styles.aboutList}>
                        <li>lots of sports (specifically biking, soccer, eight-ball pool, badminton, table tennis, tennis & frisbee)</li>
                        <li>gaming (specifically FPS games)</li>
                        <li>music (I mean listening to music LOL)</li>
                        <li>art gallery</li>
                        <li>traveling (prefer natural scenery)</li>
                        <li>movies & TV dramas</li>
                        <li>video clipping & photography</li>
                        <li>staying with family, friends & her (◍•ᴗ•◍)</li>
                        <li>and a lot more</li>
                    </ul>
                </div>
                <h1 className={styles.aboutHeading} id="Motivation">Motivation</h1>
                <div className={styles.aboutParagraph}>
                    I have learned programming since primary school, whereas most of my time focused on algorithms instead of applications (e.g. web programming).
                    Therefore, due in part to my laziness, handcrafting a site was always an unaccomplished goal for me.
                </div>
                <div className={styles.aboutParagraph}>
                    Things have changed since I started to manage knowledge on the amazing software, Notion, where I found it a great place to write memos, especially
                    technical stuff. After one or two years, I realized it was time to produce more cohesive memos to better organize and memorize important topics.
                    During my gap year, Notion published exciting news that their API would be out of beta. I knew it was time to handcraft a site, where Notion
                    can be my content management system (CMS).
                </div>
                <div className={styles.aboutParagraph}>
                    Therefore, this site is powered by Next.js as SSG frontend framework, Notion official API,
                    Notion as CMS, Vercel as site host, Namecheap as domain registration, GitHub as repo host, and the open source community.
                </div>
                <div className={styles.aboutParagraph} id="Love">
                    Importantly, this site is built with tons of Love for Computer Science and Engineering, with fucking curiosity and passion towards the
                    infinite amount of arousing knowledge, with support from family and friends, and with the pursuit of self-consistency (自洽).
                </div>
                <h1 className={styles.aboutHeading}>Contact</h1>
                To know more about me, you are free to check my <Link href="/resume.pdf">
                    <a>resume</a>
                </Link>, drop me an <Link href="mailto:jimmylinh@icloud.com">
                    <a>email</a>
                </Link>, or follow my <Link href="https://github.com/jimmylin99">
                    <a>GitHub</a>
                </Link>.
                <div className={styles.aboutParagraph}>
                You are also welcome to leave comments or add emoji below with a signed-in GitHub account.
                </div>
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