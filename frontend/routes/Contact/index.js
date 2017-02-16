export default {
    path: 'contact-us',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Contact.jsx').default)
        }, 'Home')
    }
}
