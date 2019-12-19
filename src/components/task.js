import React from "react";

class Task extends React.Component {
    render() {
        return (
            <span>
                <li>{this.props.name}</li>
                <span>
                    <a>change</a>
                    <a>complete</a>
                    <a onClick={() => this.props.deleteTask(this.props.deskOrder, this.props.name)}>delete</a>
                </span>
            </span>
        )
    }
}

export default Task;
