module.exports = {
    env: {
        BUILD_TIME: new Date().toLocaleDateString('default', {
            year: "numeric", month: "short", day: "2-digit"
        }),
    },

    async redirects() {
        return [
            {
                source: '/slide-1',
                destination: 'https://docs.google.com/presentation/d/18qZpsj2KUSb_I5RkAqmgjazQjBmAILwUdlUgYjVNGtM/edit?usp=sharing',
                permanent: false,
            },
            {
                source: '/resume',
                destination: '/resume.pdf',
                permanent: true,
            },
            {
                source: '/cv',
                destination: '/resume.pdf',
                permanent: true,
            },
            {
                source: '/us-trip',
                destination: 'https://jimmy-lin.notion.site/US-Trip-16f90c83fb0880e5b124eae5608a29a0',
                permanent: false,
            }
        ]
    },
};