import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit() {
        this.props.action(this.state);
        this.setState({username: '', password: ''})
    }

    render() {
        const {formType, otherLoc} = this.props
        return(
        <div>
            <h1>Welcome to Slack</h1>
            <h2>Please {formType} or {otherLoc} instead</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Username: 
                    <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                </label>
                <br />
                <label>Password: 
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>
                <br />
                <input type="submit" value={formType} />
            </form>
        </div>
        )
    }
}

export default SessionForm