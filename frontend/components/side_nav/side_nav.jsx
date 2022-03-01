import React from "react";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.top = React.createRef()
    }

    componentDidUpdate() {
        this.top.current.scrollIntoView()
    }

    render() {
        return(
            <div className="side-nav">
                <div ref={this.top}/>
                SIDE NAV
            </div>
        )
    }
}

export default SideNav