import React from 'react';

class Task extends React.Component {
    render() {
        let liClass;
        let changeTask;
        let completeTask;
        if (this.props.completed === true) {
            liClass = "completed";
        } else {
            changeTask = <a onClick={() => this.props.changeTask(this.props.taskOrder, this.props.name)}>change</a>;
            completeTask =
                <a onClick={() => this.props.storageUpdate("completeTask", this.props.taskOrder)}>complete</a>
        }
        return (
            <span>
                <li className={liClass}>{this.props.name}</li>
                <span>
                    {changeTask}
                    {completeTask}
                    <a onClick={() => this.props.storageUpdate("deleteTask", this.props.taskOrder)}>delete</a>
                </span>
            </span>
        )
    }
}

export default Task;
