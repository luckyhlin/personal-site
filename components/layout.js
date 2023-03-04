import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = 'Jimmy Lin';
export const siteTitle = 'Jimmy Lin -- personal site';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/public/favicon.ico"/>
                <meta
                    name="description"
                    content="A demo of my personal site"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta property="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/img.png"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/img.png"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
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
            <div className={styles.clearfix}>
            </div>
        </div>
    );
}