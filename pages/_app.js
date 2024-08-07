import '../styles/font.css';
import "../styles/global.scss";
import {Analytics} from "@vercel/analytics/react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}