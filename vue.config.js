module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.youwangdian.com',
                changeOrigin: true,
            }
        }
    }
}