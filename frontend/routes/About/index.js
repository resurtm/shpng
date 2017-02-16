export default {
    path: 'about-us',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/About.jsx').default)
        }, 'Home')
    }
}
