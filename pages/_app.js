import '../styles/font.css';
import "../styles/global.scss";
import {Analytics} from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}