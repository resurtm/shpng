import React from 'react'
import {Link} from 'react-router'
import NavItem from './NavItem.jsx'

class GlobalNav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">SHPNG</Link>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <NavItem to="/" index={true}>Home</NavItem>
                            <NavItem to="/about-us">About</NavItem>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#"
                                   className="dropdown-toggle"
                                   data-toggle="dropdown"
                                   role="button"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    Profile <span className="caret"></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a href="#">Edit Profile</a></li>
                                    <li><a href="#">Settings</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default GlobalNav
