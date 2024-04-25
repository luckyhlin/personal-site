import Giscus from "@giscus/react";

export default function MyGiscus() {
    return (
        <Giscus
            id="comments"
            repo="luckyhlin/personal-site"
            repoId="R_kgDOHsJs8Q"
            category="Announcements"
            categoryId="DIC_kwDOHsJs8c4CVf2Q"
            mapping="title"
            term="Welcome to your comments!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="eager"
        />
    )
}