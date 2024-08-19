import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MyGiscus from "./giscus";
import Navigation from "./navigation";
import Name from "./name";
import FootageText from "./footage-text";
import ScrollToTop from "./scroll-to-top";

// parameter home is not used anymore, home page has its own layout
export default function Layout({ title, useComment, description, children, home, pageType, isPrivate }) {
    return (
        <div id="container" className={styles.container}>
            <Head>
                {/* TODO: modify the content of the `name` meta tag, as it will display on GitHub Discussion */}
                {/*<meta*/}
                {/*    name="description"*/}
                {/*    content="A demo of my personal site"*/}
                {/*/>*/}
                { isPrivate &&
                    <meta name="robots" content="noindex, nofollow"/>
                }
                { description &&
                <meta
                    name="description"
                    content={description}
                />
                }
                <meta property="og:title" content={title}/>
                <title>{title}</title>
                <link rel="shortcut icon" href="/images/jager.jpeg"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/jager.jpeg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={Name()}
                        />
                        <h1 className={utilStyles.heading2Xl}>{Name()}</h1>
                    </>
                ) : (
                    <>
                        <Navigation isAbout={pageType === 'isAbout'} isBlogs={pageType === 'isBlogs'}/>
                        <Link href="/">

                            <Image
                                priority
                                src="/images/jager.jpeg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={Name()}
                            />

                        </Link>
                        {!isPrivate &&
                            <h2 className={utilStyles.headingLg}>
                                <Link
                                    href="/"
                                    className={[
                                        utilStyles.colorInherit,
                                        styles.titleFont
                                    ].join(" ")}>
                                    {"💕 " + Name() + " 💗"}
                                </Link>
                            </h2>
                        }
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                // <div className={styles.backToHome}>
                //     <Link href="/">
                //         <a>Back to home</a>
                //     </Link>
                // </div>
                <ScrollToTop/>
            )}
            {!!useComment && (
                <MyGiscus/>
            )}
            {/*{!!useComment && (*/}
            {/*    <div className="giscus"></div>*/}
            {/*)}*/}
            {/*<div className={styles.clearfix}>*/}
            {/*</div>*/}
            {/*<Script*/}
            {/*    src="https://giscus.app/client.js"*/}
            {/*    data-repo="jimmylin99/personal-site"*/}
            {/*    data-repo-id="R_kgDOHsJs8Q"*/}
            {/*    data-category="Announcements"*/}
            {/*    data-category-id="DIC_kwDOHsJs8c4CVf2Q"*/}
            {/*    data-mapping="title"*/}
            {/*    data-strict="0"*/}
            {/*    data-reactions-enabled="1"*/}
            {/*    data-emit-metadata="0"*/}
            {/*    data-input-position="bottom"*/}
            {/*    data-theme="preferred_color_scheme"*/}
            {/*    data-lang="en"*/}
            {/*    crossOrigin="anonymous"*/}
            {/*    async*/}
            {/*/>*/}
            <footer className={styles.footer}>
                <FootageText isPrivate={isPrivate}/>
            </footer>
        </div>
    );
}
