import React from "react";

class Task extends React.Component {
    render() {
        let liClass;
        if (this.props.completed === true) {
            liClass = "completed";
        }
        return (
            <span>
                <li className={liClass}>{this.props.name}</li>
                <span>
                    <a>change</a>
                    <a onClick={() => this.props.completeTask(this.props.deskOrder, this.props.taskOrder)}>complete</a>
                    <a onClick={() => this.props.deleteTask(this.props.deskOrder, this.props.taskOrder)}>delete</a>
                </span>
            </span>
        )
    }
}

export default Task;
