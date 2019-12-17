import React from "react";

class Task extends React.Component {
    render() {
        return (
            <span>
                <li id="t1">{this.props.name}</li>
                <span id="span1"><a>change</a><a>complete</a><a>delete</a></span>
            </span>
        )
    }
}

export default Task;
