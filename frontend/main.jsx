import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import About from './components/pages/About/About.jsx';

class Documentation extends React.Component {
    render() {
        return (
            <div>
                <h1>Documentation</h1>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Link to="about-us">About Us</Link>
                <Link to="help">Help</Link>
                <Link to="contact-us">Contact Us</Link>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about-us" component={About}/>
            <Route path="help" component={Documentation}/>
            <Route path="contact-us" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('container'));
