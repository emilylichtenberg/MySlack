import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../../app/assets/images/SlackIcon.png'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.action(this.state);
        this.setState({username: '', password: ''})
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    render() {
        const {formType, otherLoc} = this.props;
        // debugger
        let sessionErrors = this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
        ))

        return(
        <div className='session-form'>
            <Link to='/' className='form-slackLogo'>
                <img className="form-logo-image" src={logo} alt="logo" />
                <p>mySlack</p>
            </Link>
            <h2 className="form-welcome-message">{formType} below</h2>
            <h4 className="form-other-nav">{otherLoc} instead</h4>
            <form onSubmit={this.handleSubmit}>
                <input className="form-input" placeholder='Enter Username' type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                <br />
                <input className="form-input" placeholder='Enter Password' type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                <br />
                <ul className="form-errors">{sessionErrors}</ul>
                <input className="form-button" type="submit" value={formType} />
                <br />
                <button className="form-button">Demo Log In</button>
            </form>
        </div>
        )
    }
}

export default SessionForm