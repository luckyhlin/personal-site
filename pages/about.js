import Layout from "../components/layout";
import styles from "../styles/about.module.scss";
import blockStyles from "../components/blocks.module.css";
import richTextStyles from "../components/rich-text.module.css";
import descriptionStyles from "../components/description.module.scss";
import Link from "next/link";
import Name from "../components/name";
import Image from "next/image";

export default function About() {
    let title = "About " + Name()
    return (
        <Layout title={title} useComment={true} pageType="isAbout"
                description={"Hi, this is Lin, a cute and genuine guy with passion & love!"}>

            <div className={styles.aboutContainer}>
                <div className={styles.aboutIntroParagraph}>
                    Hi, this is <Name/>, a <span className={styles.aboutRainbowText}>cute</span> and
                    genuine guy with passion & <Link href="#Love">
                    <a className={styles.aboutRainbowText}>love!</a></Link>
                </div>
                {/*<div className={styles.aboutParagraph} style={*/}
                {/*    { marginLeft: 0}*/}
                {/*}>*/}
                {/*    Welcome! The language is in*/}
                {/*    English with some Chinese (简体 & 繁體中文).*/}
                {/*</div>*/}
                <h1 className={styles.aboutHeading}>🎓 Education & Career</h1>
                <div className={styles.aboutParagraph}>
                    I will pursue my master of science degree in computer science (MSCS) at the <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.wisc.edu/">
                            <a className={[descriptionStyles.textLink].join(" ")}>🇺🇸 University of Wisconsin–Madison</a>
                        </Link>
                    </span> (◍•ᴗ•◍)
                </div>
                <div className={styles.aboutParagraph}>
                    Prior to that, I earned my B.Eng. in electrical and computer engineering (ECE), with 🌟 honors research program & a minor degree in data science (DS)
                    at the <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.ji.sjtu.edu.cn/">
                            <a className={[descriptionStyles.textLink].join(" ")}>🇨🇳 Shanghai Jiao Tong University (UM-SJTU Joint Institute 上交密院).</a>
                        </Link>
                    </span>
                </div>
                <div className={styles.aboutParagraph}>
                    Following my bachelor's, I worked at <span
                    className={descriptionStyles.textInlineBox}>
                        <Link href="https://www.bytedance.com/en/">
                            <a className={[descriptionStyles.textLink].join(" ")}>💙 ByteDance</a>
                        </Link>
                    </span> for a year as an SDE, and then took a gap year.
                </div>
                <div className={styles.aboutParagraph}>
                    I love computer science & engineering (CSE) since childhood. Before college, I started a computer & electronics social club,
                    won algorithm contests, and DIY software & hardware.
                </div>
                <h1 className={styles.aboutHeading}>😆 Interest</h1>
                <details className={blockStyles.blockToggle}>
                    <summary className={blockStyles.blockToggleSummary}>
                        My current academic interest lies in <span className={richTextStyles.code}>
                            computer systems
                        </span>, while my previous experiences,
                        though may be preliminary, cover many fields (Click 🖱️ to see more)
                    </summary>
                    <ul className={styles.aboutList}>
                        <li>CS education for K-12 students 🧒,</li>
                        <li>web development (frontend, backend & algorithm engineering),</li>
                        <li>artificial intelligence (deep reinforcement learning),</li>
                        <li>mathematics,</li>
                        <li>mechatronics (robots, quadcopter drones, food 3D printers & ECG),</li>
                        <li>many other EECS fields (such as computer architecture, game programming & semiconductor),</li>
                        <li>competitive programming (i.e. data structure & algorithm contests, specifically NOIP 🥇 & NOI winter camp 🥉).</li>
                    </ul>
                </details>
                <details className={blockStyles.blockToggle}>
                    <summary className={blockStyles.blockToggleSummary}>
                        Also, I embrace the diversity and beauty of life through a lot more activities
                    </summary>
                    <ul className={styles.aboutList}>
                        <li>⚽ sports (biking, soccer, eight-ball pool, badminton, table tennis, tennis & frisbee)
                        我是运动小天才！
                        </li>
                        <li>🎮 gaming (a HUGE fan of multi-player FPS 🔫 games): APEX, 彩虹六号 (R6), CS:GO, 战地 (Battlefield 1 & 5),
                            OverWatch, Insurgency, Division 2, CoD (single player only)<br/>Look for time & teammates! 😎
                        </li>
                        <li>⛰️ traveling (prefer natural scenery)</li>
                    </ul>
                    and MORE 😂
                </details>
                <h1 className={styles.aboutHeading} id="Motivation">🚆 Motivation</h1>
                <details className={blockStyles.blockToggle}>
                    <summary className={blockStyles.blockToggleSummary}>
                        A story behind the construction of this site
                    </summary>
                <div className={styles.aboutParagraph}>
                    I have learned programming since primary school, whereas I focused mostly on algorithms instead of applications.
                    Therefore, due in part to my laziness, handcrafting a site was always an unaccomplished goal for me.
                </div>
                <div className={styles.aboutParagraph}>
                    Things have changed since I started to manage knowledge on the amazing software, Notion, where I found it a great place to write memos, especially
                    technical stuff. After one or two years, I realized it was time to produce more cohesive memos to better organize and memorize important topics.
                    During my gap year, Notion published exciting news that their API would be out of beta. I knew it was time to handcraft a site, where Notion
                    can be my content management system (CMS).
                </div>
                <div className={styles.aboutParagraph}>
                    Therefore, technically, this site is powered by a Jamstack architecture pattern: Next.js as an SSG frontend framework, Notion official API,
                    Notion as CMS, Vercel as site host & CDN, giscus as comment system, Cloudinary as image storage, Namecheap as domain registration, GitHub as repo host, and the open source community. 🤟
                </div>
                </details>
                <div className={styles.aboutParagraph} id="Love ❤">
                    Importantly, this site is built with <span className={styles.aboutRainbowText}>Love ❤</span> for Computer Science and Engineering, with curiosity and passion towards the
                    infinite amount of arousing knowledge, with support from family and friends, and with the pursuit of self-consistency (自洽) to also have a sense of 『我属于我自己』(I belong to myself).
                </div>
                <h1 className={styles.aboutHeading}>📞 Contact</h1>
                To know more about me, you are free to check my <Link href="/resume.pdf">
                    <a>📄 resume</a>
                </Link>. Also, feel free to drop me an <Link href="mailto:jimmylinh@icloud.com">
                    <a>📧 email</a>
                </Link>
                {/*, or follow my <Link href="https://github.com/jimmylin99">*/}
                {/*    <a>GitHub</a>*/}
                {/*</Link>*/}
                .
                <div className={styles.aboutParagraph}>
                You are also welcome to leave comments or add emoji below with a signed-in GitHub account, and follow me
                    on <Link href="https://github.com/luckyhlin">
                        <a>GitHub <Image
                        src="/images/github-icon.png"
                        height={24}
                        width={24}
                        />.</a>
                    </Link>
                </div>

                <h1 className={styles.aboutHeading} id="Love" style={
                    { color: "rgba(225, 171, 255, 1)"}
                }>😘 Acknowledgement</h1>
                <details className={blockStyles.blockToggle} style={
                    {
                        background: "linear-gradient(90deg, rgba(225, 171, 255, 0.5), rgba(245, 0, 255, 0.3), rgba(221, 122, 255, 0.3), rgba(241, 131, 160, 0.3))",
                        color: "white"
                    }
                }>
                    <summary className={blockStyles.blockToggleSummary}>
                        Here is a list of friends who help the construction of this site!
                    </summary>
                    <div className={styles.aboutParagraph}>
                        han酱, cheng酱, ma老師, 腿醬, 梨酱, chi酱 &
                        豆子💛
                    </div>
                    <div className={styles.aboutParagraph}>Thanks to 頷, who (passively) becomes the
                        catalyst towards the completion of this site💖</div>
                </details>
                <div className={styles.aboutRainbowText}
                     style={{
                         fontSize: "130%",
                         paddingBottom: "5px",
                         lineHeight: "160%",
                         animationDuration: "25s",
                         animationDirection: "alternate",
                         opacity: "0.8",
                     }
                     }>
                    Thanks to my beloved FAMILY,<br/>
                    super sincere warm FRIENDS,<br/>
                    nice teachers who guided me &<br/>
                    ❤ kind-hearted girls ❤ who made my heart flutter ◍•ᴗ•◍
                    <br/>LOVE YOU ALL!!!
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