import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown');

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App.jsx').default,
        childRoutes: [
            require('./routes/About').default,
            require('./routes/Contact').default
        ]
    }]
};

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute}/>
    </Provider>,
    document.getElementById('container')
);
