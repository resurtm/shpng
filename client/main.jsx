import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            datetime: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            datetime: new Date()
        });
    }

    render() {
        return (
            <p>{this.state.datetime.toLocaleTimeString()}</p>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>shpng</h1>
                <Clock/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);
