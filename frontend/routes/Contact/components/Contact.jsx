import React from 'react'
import {connect} from 'react-redux'
import {submitContactData} from '../../../actions/contact'

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.initialName,
            email: props.initialEmail
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact Us</h1>

                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <input type="text"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.handleNameChange}/>
                        </div>

                        <div className="form-group">
                            <input type="email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}/>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialName: state.contact.name,
        initialEmail: state.contact.email
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFormSubmit: ({name, email}) => {
            dispatch(submitContactData({name, email}));
        }
    }
};

Contact = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

export default Contact
