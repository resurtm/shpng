import React from 'react'
import {Link, withRouter} from 'react-router'

class NavItem extends React.Component {
    render() {
        const {router, to, index} = this.props;
        const isActive = router.isActive(to, index);

        return (
            <li className={isActive ? 'active' : ''}>
                <Link to={to}>{this.props.children}</Link>
            </li>
        )
    }
}

export default withRouter(NavItem)
