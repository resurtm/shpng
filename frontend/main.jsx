import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown');

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App.jsx').default,
        childRoutes: [
            require('./routes/About').default,
        ]
    }]
};

render((
    <Router history={browserHistory} routes={rootRoute}/>
), document.getElementById('container'));
