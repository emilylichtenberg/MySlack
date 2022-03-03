import React from "react";

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.channel;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        this.setState({name: '', description: '', private: false})
    }

    render() {
        const {formType, action} = this.props
        return(
            <div className="modal-full-page">
                <div>
                    <h1>{formType}</h1>
                    <p>X</p>
                </div>
                <h2>Channels are where your team communicates.  They're best when organized around a topic -- #marketing, for example.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.state.name} placeholder='# e.g. plan-budget' onChange={this.updateField('name')}/>
                    </label>
                    <label>Description
                        <input type="text" value={this.state.description} onChange={this.updateField('description')}/>
                    </label>
                    <label>Make private
                        <input type="checkbox" className="round-slider" />
                    </label>
                    <input type="submit" value='Create'/>
                </form>
            </div>
        )
    }
}

export default ChannelForm