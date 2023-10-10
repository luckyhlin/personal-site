import styles from "./description.module.scss"
import Link from "next/link";
import Name from "../components/name";

export default function Description() {
    return (
        <>
                <span className={styles.headingTextDescription}>
                    {/*Hi, this is <Name/>, a cute and genuine guy with passion and love!*/}
                    Hi, this is <Name/>, a passionate guy with curiosity & love!
                    {/*I am now reaching the end of a gap year.*/}
                                {/*            after having both received my B.Eng from <span*/}
                                {/*className={styles.textInlineBox}>*/}
                                {/*                <Link href="https://www.ji.sjtu.edu.cn/">*/}
                                {/*                    <a className={[styles.textLink, styles.textLinkColor].join(" ")}>UMJI-SJTU</a>*/}
                                {/*                </Link>*/}
                                {/*            </span> and served as a full-time software engineer in <span className={styles.textInlineBox}>*/}
                                {/*                <Link href="https://www.bytedance.com/en/">*/}
                                {/*                    <a className={[styles.textLink, styles.textLinkColor].join(" ")}>ByteDance</a>*/}
                                {/*                </Link>*/}
                                {/*            </span> for a year.*/}
                </span>
                <span className={styles.headingTextDescription}>
                    I am pursuing a master's degree in computer science at the <span
                    className={styles.textInlineBox}>
                        <Link href="https://www.wisc.edu/">
                            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>University of Wisconsin–Madison</a>
                        </Link>
                    </span> (◍•ᴗ•◍)
                </span>
                <span className={styles.headingTextDescription}
                      // style={{ fontSize: "140%" }}
                >
                    My Hobby Emoji: ⚽️🏸️🎾️🏓️🥏🏐️🎱️🎳️🧗🏻🚴🏻🚣🏻🍨️🎮️⛰️💬️
                    <br/>我是宇宙超级无敌可爱机智の<br/>🍑黃桃大罐頭💛
                    {/*It's astonishing to me that I've dedicated more than half of my life to studying CS/CE and still love it.*/}
                    {/*<br/>Just as I do sports and traveling. 💛*/}
                </span>
                <span className={styles.headingTextDescription}>
                    Visit <Link href="/about">
                            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>my profile</a>
                        </Link> to know more <span style={
                            {
                                color: "#9911cb"
                            }
                        }> (ᕑᗢᓫ∗) </span>
                </span>
                {/*<span className={styles.headingTextDescription}>*/}
                {/*    If necessary, reach me via <span className={styles.textInlineBox}>*/}
                {/*        <Link href="mailto:jimmylinh@icloud.com">*/}
                {/*            <a className={[styles.textLink, styles.textLinkColor].join(" ")}>jimmylinh@icloud.com</a>*/}
                {/*        </Link>*/}
                {/*    </span>*/}
                {/*</span>*/}
        </>
    )
}