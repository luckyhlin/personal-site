import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function HomePage() {
    const [clickCounter, setClickCounter] = useState(0);

    function handleClick() {
        setClickCounter(clickCounter + 1);
    }

    function resetClick() {
        setClickCounter(0);
    }

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>
                Read <Link href="/posts/first-post">this page</Link>!
            </h1>
            <section className={utilStyles.headingXl}>
                <Link href="/posts/notion-test-post">Notion Database Page Content</Link>
            </section>
            <section className={utilStyles.headingMd}>
                <div>
                    <button onClick={handleClick}>{clickCounter}</button>
                    <button onClick={resetClick}>Press to reset the click counter</button>
                </div>
                <Image
                    src="/images/img.png"
                    height={144}
                    width={144}
                    alt="WhiteImg"
                />
                <p>Hello</p>
            </section>
        </Layout>
    )
}