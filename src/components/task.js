import React from "react";

class Task extends React.Component {
    render() {
        return (
            <span>
                <li id={"d" + this.props.deskOrder + "t" + this.props.taskOrder}>{"#" + this.props.taskOrder + " " + this.props.name}</li>
                <span id="span1">
                    <a>change</a>
                    <a>complete</a>
                    <a onClick={this.props.reduceTaskNumber}>delete</a>
                </span>
            </span>
        )
    }
}

export default Task;
