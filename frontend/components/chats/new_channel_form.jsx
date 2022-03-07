import React from "react";
import 'regenerator-runtime/runtime'
import { async } from "regenerator-runtime/runtime";

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat_type: props.channel.chat_type,
            name: props.channel.name,
            description: props.channel.description,
            private: props.channel.private,
            admin_id: props.channel.admin_id,
            workspace_id: props.channel.workspace_id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.togglePrivate = this.togglePrivate.bind(this)
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger    
        let submitForm = async () => this.props.action(this.state);
        submitForm()
            // .then(() => this.setState({name: '', description: '', private: false}))
            .then(channel => {
                // debugger
                this.props.history.push({pathname: `/workspaces/${this.state.workspace_id}/chats/${channel.chat.id}`})
            })
            .then(() => this.props.removeChatErrors())
            .then(() => this.props.closeModal())

    }

    togglePrivate() {
        let newStatus = this.state.private ? false : true
        this.setState({private: newStatus})
    }

    render() {
        const {action} = this.props
        let chatErrors = this.props.errors
        return(
            <div className="new-channel-container">
                <div className="create-channel-header">
                    {!this.state.private ? <h1>Create a channel</h1> : <h1>Create a private channel</h1>}
                    <button onClick={() => this.props.closeModal()}>X</button>
                </div>
                <h2>Channels are where your team communicates.  They're best when organized around a topic -- #marketing, for example.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-label">Name
                        <br />
                        <input className="form-input" type="text" value={this.state.name} placeholder='# e.g. plan-budget' required onChange={this.updateField('name')}/>
                        <p className="chat-errors">{chatErrors}</p>
                    </label>
                    <br />
                    <label className="form-label">Description
                        <br />
                        <input className="form-input" type="text" value={this.state.description} onChange={this.updateField('description')}/>
                    </label>
                        <h2>What's this channel about?</h2>
                    <br />
                    <label className="private-label">Make private
                        <div className="private-details">
                            {!this.state.private ? 
                                    <h2>When a channel is set to private, it can only be viewed or joined by invitation.</h2>
                                    : <h2>This can’t be undone. A private channel cannot be made public later on.</h2>}
                            <input type="checkbox" id="private-checkbox" onChange={this.togglePrivate}/>
                        </div>
                    </label>
                    <br />
                    <input className="submit" type="submit" value='Create'/>
                </form>
            </div>
        )
    }
}

export default ChannelForm