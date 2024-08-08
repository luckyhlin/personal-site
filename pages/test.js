// pages/index.js
import Head from 'next/head';
import CustomCarousel from '../components/carousel';

const hobbies = [
    {
        title: '⚽ Sports',
        description: (
            <ul style={{
                color: "white",
                opacity: 1,
            }}>
                <li>archery 🏹</li>
                <li>soccer ⚽</li>
                <li>billiards 🎱</li>
                <li>badminton 🏸</li>
                <li>table tennis 🏓</li>
                <li>climbing 🧗</li>
                <li>snowboard 🏂</li>
                <li>sailing ⛵️</li>
                <li>tennis 🎾</li>
                <li>frisbee 🥏</li>
            </ul>
        ),
        // background: 'linear-gradient(135deg, #4aeadc 0%, #9778d1 20%, #cf2aba 40%, #ee2c82 60%, #fb6962 80%, #fef84c 100%) fixed',
        backgroundImage: `url(https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // filter: "blur(10px)",
        // zIndex: "-1",
    },
    {
        title: '🎮 Gaming',
        description: 'A HUGE fan of multi-player FPS 🔫 games: APEX, 彩虹六号 (R6), CS:GO, 战地 (Battlefield 1 & 5), OverWatch, Insurgency, Division 2, CoD & FPS VR game developed by myself',
        backgroundImage: `url(https://images.unsplash.com/photo-1605296830714-7c02e14957ac?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    },
    {
        title: '💬️ Chatting & 🤔️ Thinking',
        description: (
            <ul>
                <li>tho being ISFP-T, super outgoing & energetic when with ppl in the correct vibe 🥰</li>
                <li>in pursuit of consistency logically on science & philosophically on life</li>
            </ul>
        ),
        backgroundImage: `url('https://images.unsplash.com/photo-1580130037032-b1d3878e348b?q=80&w=2266&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    },
    {
        title: '🎧 Media & Art',
        description: (
            <ul>
                <li>🎬️ TV and Movies: drama films, crime TV shows, or romantic TV shows with pretty actress 😁️</li>
                <li>🎧️ Music: I really like my Sony headphone & its noise isolation feature lol</li>
                <li>🕺🏻 Dancing: tho I am poor at remembering gestures, I really like shaking with rhythms</li>
            </ul>
        ),
        backgroundImage: `url('https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg')`
    },
    {
        title: '⛰️ Traveling & Photography',
        description: 'Nature and Beauties. I need photos to remind me of the precious life moments. They allocate meanings to life.',
        backgroundImage: `url('https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg')`
    },
];

export default function Test() {
    return (
        <div>
            <Head>
                <title>Trending Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{
                background: "rgba(255, 233, 233, 1)",
            }}>
                <CustomCarousel items={hobbies} />
            </main>
        </div>
    );
}
