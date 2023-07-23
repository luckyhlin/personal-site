module.exports = {
    env: {
        BUILD_TIME: new Date().toLocaleDateString('default', {
            year: "numeric", month: "short", day: "2-digit"
        }),
    },
};