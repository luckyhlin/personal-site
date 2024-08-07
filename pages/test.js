// pages/index.js
import Head from 'next/head';
import CustomCarousel from '../components/carousel';

export default function Test() {
    return (
        <div>
            <Head>
                <title>Trending Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/*<div style={{*/}
                {/*    width: "1000px",*/}
                {/*    background: "pink",*/}
                {/*    height: "500px",*/}
                {/*}}>*/}
                <CustomCarousel />
                {/*</div>*/}
            </main>
        </div>
    );
}
