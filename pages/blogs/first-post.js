import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>this is a title</title>
            </Head>
            <Link href="/">Home Page</Link>
            <h1>First Post</h1>
        </Layout>
    )
}