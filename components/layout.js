import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Giscus from "@giscus/react";
import Navigation from "./navigation";

const name = 'Hao Lin';

export default function Layout({ title, useComment, children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* TODO: modify the content of the `name` meta tag, as it will display on Github Discussion */}
                {/*<meta*/}
                {/*    name="description"*/}
                {/*    content="A demo of my personal site"*/}
                {/*/>*/}
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
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Navigation/>
                        <Link href="/">
                            <a>
                            <Image
                                priority
                                src="/images/jager.jpeg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </div>
            )}
            {!!useComment && (
                <Giscus
                    id="comments"
                    repo="jimmylin99/personal-site"
                    repoId="R_kgDOHsJs8Q"
                    category="Announcements"
                    categoryId="DIC_kwDOHsJs8c4CVf2Q"
                    mapping="title"
                    term="Welcome to @giscus/react component!"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme="light"
                    lang="en"
                    loading="lazy"
                />
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
                Built by Hao Lin with Love (◍•ᴗ•◍)
            </footer>
        </div>
    );
}