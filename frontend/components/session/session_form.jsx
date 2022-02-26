import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', displayName: ''};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit() {
        this.props.action(this.state)
    }

    render() {
        const {formType} = this.props
        return(
        <div>
            <h1>{formType}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Email: 
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
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