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
            <div className="new-channel-container">
                <div className="create-channel-header">
                    <h1>{formType}</h1>
                    <button onClick={() => this.props.closeModal()}>X</button>
                </div>
                <h2>Channels are where your team communicates.  They're best when organized around a topic -- #marketing, for example.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <br />
                        <input type="text" value={this.state.name} placeholder='# e.g. plan-budget' onChange={this.updateField('name')}/>
                    </label>
                    <br />
                    <label>Description
                        <br />
                        <input type="text" value={this.state.description} onChange={this.updateField('description')}/>
                    </label>
                        <h2>What's this channel about?</h2>
                    <br />
                    <label>Make private
                        <input type="checkbox" className="round-slider" />
                    </label>
                        <h2>When a channel is set to private, it can only be viewed or joined by invitation.</h2>
                        <h2>This can’t be undone. A private channel cannot be made public later on.</h2>
                    <br />
                    <input type="submit" value='Create'/>
                </form>
            </div>
        )
    }
}

export default ChannelForm