import styles from "../styles/about.module.scss";
import blockStyles from "../components/blocks.module.css";
import richTextStyles from "../components/rich-text.module.scss";
import descriptionStyles from "../components/description.module.scss";
import Link from "next/link";
import Name from "../components/name";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

// Notice that we have removed the '/about' page
// but embed it into the home page
// To change it to the '/about' page again,
// * uncomment <Layout/>
// * move it to the /pages folder
// * handle Giscus in GitHub and other import issues
// * modify contents to be more cohesive
export default function About() {
    let title = "About " + Name()
    return (
        // <Layout title={title} useComment={true} pageType="isAbout"
        //         description={"Hi, this is " + Name() + ", a cute and genuine guy with passion & love!"}>

            <AboutContent/>

            // {/*<div className={styles.paragraph}>*/}
            // {/*    I am now in a gap year after having*/}
            // {/*both received my B.Eng from UMJI-SJTU*/}
            // {/*and served as a full-time software engineer in ByteDance for a year.*/}
            // {/*    /!*I may move on to University of Wisconsin-Madison and pursue*!/*/}
            // {/*    /!*my M.S. Computer Science degree.*!/*/}
            // {/*</div>*/}
            // {/*<div className={styles.paragraph}>*/}
            // {/*    My academic and professional interests lie in computer science,*/}
            // {/*    specifically high performance systems and artificial intelligence.*/}
            // {/*    I am also skilled in various sports such as soccer, badminton.*/}
            // {/*    FPS gaming is also my favorite, like APEX, CSGO, R6 (my avatar is*/}
            // {/*    a famous character in this game).*/}
            // {/*</div>*/}
            // {/*<div className={styles.paragraph}>*/}
            // {/*    These activities usually*/}
            // {/*    need a team of members to move on, so I wish to meet new friends*/}
            // {/*    who share similar hobbies with me. Please feel free to reach me*/}
            // {/*    via `jimmylinh AT icloud DOT com`.*/}
            // {/*</div>*/}
        // </Layout>
    );
}

function AboutContent() {
    return (
        <div className={styles.aboutContainer}>
            {/*<div className={styles.aboutIntroParagraph}>*/}
            {/*    /!*Hi, this is <Name/>, a <span className={styles.aboutRainbowText}>cute</span> and*!/*/}
            {/*    /!*genuine guy with passion & <Link href="#Love">*!/*/}
            {/*    /!*<a className={styles.aboutRainbowText}>love!</a></Link>*!/*/}
            {/*    Hi, this is <Name/>, a <span className={styles.aboutRainbowText}>passionate</span> guy with*/}
            {/*    curiosity & <Link href="#Love" className={styles.aboutRainbowText}>*/}
            {/*    love!</Link>*/}
            {/*</div>*/}

            {/*<div className={styles.aboutParagraph} style={*/}
            {/*    { marginLeft: 0}*/}
            {/*}>*/}
            {/*    Welcome! The language is in*/}
            {/*    English with some Chinese (简体 & 繁體中文).*/}
            {/*</div>*/}
            <h1 className={styles.aboutHeading}>🐻️ Work LIFE Balance</h1>
            <div className={styles.aboutParagraph}>
                <span style={{
                    fontStyle: "italic",
                }}>"Busy living, or busy dying." -- The Shawshank Redemption
                </span>
            </div>
            <div className={styles.aboutParagraph}>
                Always embrace the diversity and beauty of life:
                <ul className={styles.aboutList}>
                    <li>⚽ sports (biking, soccer, eight-ball pool, badminton, table tennis, wall climbing, snowboarding, tennis &
                        frisbee)
                        我是运动小天才！
                    </li>
                    <li>🎮 gaming (a HUGE fan of multi-player FPS 🔫 games): APEX, 彩虹六号 (R6), CS:GO, 战地
                        (Battlefield 1 & 5),
                        OverWatch, Insurgency, Division 2, CoD (single player only)<br/>Look for time & teammates!
                        😎
                    </li>
                    <li>⛰️ traveling (prefer natural scenery)</li>
                    <li>🎬️ movies (philosophical & romantic)</li>
                    <li>🎧️ music (I really like my Sony headphone & its denoising feature lol)</li>
                    <li>🕺🏻 dancing (tho I am poor at remembering gestures, I really like shaking with rhythms)</li>
                    <li>🤔️ thinking (pursue consistency logically on science & philosophically on life)</li>
                    <li>💬️ chatting (super outgoing & energetic when with ppl in the correct vibe 🥰)</li>
                </ul>
                and MORE 😂
            </div>
            <h1 className={styles.aboutHeading}>🎓 Education & Career</h1>
            <div className={styles.aboutParagraph}>
                I am pursuing my master of science degree in computer science (MSCS) at the <span
                className={descriptionStyles.textInlineBox}>
                        <Link
                            href="https://www.wisc.edu/"
                            className={[descriptionStyles.textLink].join(" ")}>
                            🇺🇸 University of Wisconsin–Madison
                        </Link>
                    </span> (◍•ᴗ•◍)
            </div>
            <div className={styles.aboutParagraph}>
                Prior to that, I earned my B.Eng. in electrical and computer engineering (ECE), with 🌟 honors
                research program, and a minor degree in data science (DS)
                at the <span
                className={descriptionStyles.textInlineBox}>
                        <Link
                            href="https://www.ji.sjtu.edu.cn/"
                            className={[descriptionStyles.textLink].join(" ")}>
                            🇨🇳 Shanghai Jiao Tong University (UM-SJTU Joint Institute 上交密院).
                        </Link>
                    </span>
            </div>
            <div className={styles.aboutParagraph}>
                Following my bachelor's, I worked at <span
                className={descriptionStyles.textInlineBox}>
                        <Link
                            href="https://www.bytedance.com/en/"
                            className={[descriptionStyles.textLink].join(" ")}>
                            💙 ByteDance
                        </Link>
                    </span> for a year as an SDE, and then took a gap year.
            </div>
            <div className={styles.aboutParagraph}>
                I love math, computer science & engineering since childhood. Before college, I founded a computer &
                electronics social club,
                won algorithm contests, and DIYed software & hardware projects.
            </div>
            <h1 className={styles.aboutHeading}>😆 Academic Interests</h1>
            <div className={styles.aboutParagraph}>
                My current academic interest spans in
                <ul className={[styles.aboutList, styles.aboutSparseList].join(" ")}>
                    <li>
                            <span className={richTextStyles.code}>
                                Computer Systems
                            </span>
                    </li>
                    <li>
                            <span className={richTextStyles.code}>
                                Theory of Computation, Computability and Logic
                            </span>
                    </li>
                    <li>
                            <span className={richTextStyles.code}>
                                Theory of Programming Languages
                            </span>
                    </li>
                </ul>
            </div>
            <details className={blockStyles.blockToggle}>
                <summary className={blockStyles.blockToggleSummary}>
                    My experiences also covered many fields
                </summary>
                {/*<div className={styles.aboutParagraph}>*/}
                {/*    <span className={descriptionStyles.textInlineBox}>*/}
                {/*        <span style={{margin: "0 0.1em"}}>🔗️</span>*/}
                {/*        <Link*/}
                {/*            href="https://whimsical.com/my-eecs-diagram-XFRK8WMDYLiLARRUq2NLbr@2Ux7TurymNXQugZNAztH"*/}
                {/*            className={[descriptionStyles.textLink].join(" ")}>*/}
                {/*            To see the diagram showing my familiar areas in EECS, click here*/}
                {/*        </Link>*/}
                {/*    </span>*/}
                {/*</div>*/}
                <ul className={styles.aboutList}>
                    <li>mathematics (analysis, discrete & numerical),</li>
                    <li>web development (frontend, backend & algorithm engineering),</li>
                    <li>very large scale integrated circuit (VLSI),</li>
                    <li>high performance computing,</li>
                    <li>artificial intelligence (deep reinforcement learning),</li>
                    <li>mechatronics (robots, quadcopter drones, food 3D printers & ECG),</li>
                    <li>CS education for K-12 students and beyond 🧒,</li>
                    <li>many other EECS fields (such as computer architecture, semiconductor, quantum computing, game
                        development),
                    </li>
                    <li>competitive programming (i.e. data structure & algorithm contests, specifically NOIP
                        🥇 & NOI
                        winter camp 🥉).
                    </li>
                </ul>
                <div className={styles.aboutParagraph}>
                    I am still figuring out which field I am gonna dive deeper, but I have pretty much
                    enjoyed
                    learning various topics which have aspired my curiosity so far.
                </div>
            </details>

            <h1 className={styles.aboutHeading} id="Motivation">🚆 Motivation</h1>
            <details className={blockStyles.blockToggle}>
                <summary className={blockStyles.blockToggleSummary}>
                    Stories behind the site
                </summary>
                <div className={styles.aboutParagraph}>
                    I have learned programming since primary school, whereas I focused mostly on algorithms instead
                    of applications.
                    Therefore, due in part to my laziness, handcrafting a site was always an unaccomplished goal for
                    me.
                </div>
                <div className={styles.aboutParagraph}>
                    Things have changed since I started to manage knowledge on the amazing software, Notion, where I
                    found it a great place to write memos, especially
                    technical stuff. After one or two years, I realized it was time to produce more cohesive memos
                    to better organize and memorize important topics.
                    During my gap year, Notion published exciting news that their API would be out of beta. I knew
                    it was time to handcraft a site, where Notion
                    can be my content management system (CMS).
                </div>
                <div className={styles.aboutParagraph}>
                    Therefore, technically, this site is powered by a Jamstack architecture pattern: Next.js as an
                    SSG frontend framework, Notion official API,
                    Notion as CMS, Vercel as site host & CDN, giscus as comment system, Cloudinary as image storage,
                    Namecheap as domain registration, GitHub as repo host, and the open source community. 🤟
                </div>
                <div className={styles.aboutParagraph}>
                    The current domain name 'EverHao.me' was creatively coined by ChatGPT.
                    The term 'Ever' suggests continuity, persistence, and perseverance.
                    Alternatively, it poses a rhetorical question, 'Ever Hao? Me!',
                    highlighting a personal and engaging invitation to explore the content
                    related to 'Hao'.
                </div>
            </details>
            <div className={styles.aboutParagraph} id="Love ❤">
                Importantly, this site is built with <span className={styles.aboutRainbowText}>Love ❤</span> for
                Math, Computer Science and Engineering, with curiosity and passion towards the
                infinite amount of arousing knowledge, with support from family and friends, and with the pursuit of
                self-consistency (自洽) to also have a sense of 『我属于我自己』(I belong to myself).
            </div>
            <h1 className={styles.aboutHeading}>📞 Contact</h1>
            <div className={styles.aboutParagraph}>
                To know more about me, you are free to check my 📄 <Link href="/resume">
                Curriculum Vitae
            </Link> (CV, used interchangeably with the term resume).
                Also, feel free to drop me an 📧 <Link href="mailto:jimmylinh@icloud.com">
                email
            </Link>.
            </div>
            {/*, or follow my <Link href="https://github.com/jimmylin99">*/}
            {/*    <a>GitHub</a>*/}
            {/*</Link>*/}
            <div className={styles.aboutParagraph}>
                You are also welcome to leave comments or add emoji below with a signed-in GitHub account, and
                follow me
                on <Link href="https://github.com/luckyhlin">
                GitHub
            </Link> <Image
                src="/images/github-icon.png"
                height={24}
                width={24}
                alt="GitHub Icon"
                style={{
                    display: "inline-block"
                }}/> & <Link href="https://www.linkedin.com/in/hao-lin-530368280/">
                LinkedIn
            </Link> <Image
                src="/images/linkedin-icon.png"
                height={24}
                width={24}
                alt="LinkedIn Icon"
                style={{
                    display: "inline-block"
                }}/>.
            </div>

            <h1 className={styles.aboutHeading} id="Love" style={
                {color: "rgba(225, 171, 255, 1)"}
            }>😘 Acknowledgement</h1>
            <details className={blockStyles.blockToggle} style={
                {
                    background: "linear-gradient(90deg, rgba(225, 171, 255, 0.5), rgba(245, 0, 255, 0.3), rgba(221, 122, 255, 0.3), rgba(241, 131, 160, 0.3))",
                    color: "white"
                }
            }>
                <summary className={blockStyles.blockToggleSummary}>
                    Here is a list of friends who helped evaluate this site!
                </summary>
                <div className={styles.aboutParagraph}>
                    han酱, cheng酱, ma老師, 腿醬, 梨酱, chi酱 &
                    豆子 💛
                </div>
                <div className={styles.aboutParagraph}>Thanks to 頷, who (passively) becomes the
                    catalyst towards the completion of this site 💖
                </div>
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
    )
}