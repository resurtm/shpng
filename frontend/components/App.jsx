import React from 'react'
import GlobalNav from './GlobalNav.jsx'
import Index from './Index.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalNav/>
                <div className="container">
                    {this.props.children || <Index/>}
                </div>
            </div>
        )
    }
}

export default App
