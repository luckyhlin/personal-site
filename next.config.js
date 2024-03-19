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
            }
        ]
    },
};