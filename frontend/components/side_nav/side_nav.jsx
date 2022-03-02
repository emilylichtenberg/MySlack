import React from "react";
import ChatIndexContainer from '../chats/chats_index_container'

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.top = React.createRef()
    }

    componentDidMount() {
        this.top.current.scrollIntoView()
    }

    render() {
        return(
            <div className="side-nav">
                <div ref={this.top}/>
                <ChatIndexContainer />
            </div>
        )
    }
}

export default SideNav