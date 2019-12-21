import React from 'react';
import Task from './task';

class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taskText: ""};
    }

    handleChangeTaskText = (event) => {
        this.setState({taskText: event.target.value})
    };

    changeTask = (taskOrder, taskName) => {
        this.setState({taskText: taskName});
        this.props.storageUpdate("deleteTask", taskOrder);
    };

    render() {
        return (
            <div className="desk" draggable="true">
                <a className="circleButton">
                    <div className="circle green"/>
                </a>
                <a className="circleButton">
                    <div className="circle red"/>
                </a>
                <a className="circleButton">
                    <div className="circle blue"/>
                </a>
                <div className="title">
                    <h2>{"#" + (this.props.deskOrder + 1) + " " + this.props.name}</h2>
                    <a onClick={() => this.props.storageUpdate("deleteDesk", this.props.deskOrder)}>delete</a>
                </div>
                <hr/>
                <ol className="list">
                    {this.props.tasks.map((currentTask) => <Task name={currentTask.name}
                                                                 taskOrder={currentTask.order}
                                                                 completed={currentTask.completed}
                                                                 deskOrder={this.props.deskOrder}
                                                                 storageUpdate={this.props.storageUpdate}
                                                                 changeTask={this.changeTask}/>)}
                </ol>
                <div>
                    <input type="input" className="deskInput" placeholder="Name of new task"
                           onChange={this.handleChangeTaskText} value={this.state.taskText}/>
                    <input type="button" className="deskButton" value="Add new task"
                           onClick={() => {this.props.storageUpdate("createTask", {
                               deskOrder: this.props.deskOrder,
                               taskObj: {name: this.state.taskText, completed: false}
                           }); this.setState({taskText: ""});}}/>
                </div>
            </div>
        )
    }
}

export default Desk;
