import React from "react";
import Task from "./task";

class Desk extends React.Component {
    createTask = (deskOrder) => {
        this.props.storage.createTask(deskOrder);
        this.props.deskUpdate();
    };

    completeTask = (deskOrder, taskOrder) => {
        this.props.storage.completeTask(deskOrder, taskOrder);
        this.props.deskUpdate();
    };

    deleteTask = (deskOrder, taskOrder) => {
        this.props.storage.deleteTask(deskOrder, taskOrder);
        this.props.deskUpdate();
    };

    render() {
        alert("deskUpdate #" + (this.props.deskOrder + 1));
        return (
            <div className="desk" draggable="true">
                <div className="title">
                    <h2>{"#" + (this.props.deskOrder + 1) + " " + this.props.name}</h2>
                    <a onClick={() => this.props.deleteDesk(this.props.deskOrder)}>delete</a>
                    <a className="circleButton">
                        <div className="circle blue"/>
                    </a>
                    <a className="circleButton">
                        <div className="circle red"/>
                    </a>
                    <a className="circleButton">
                        <div className="circle green"/>
                    </a>
                </div>
                <hr/>
                <ol className="list">
                    {this.props.tasks.map((currentTask) => <Task name={currentTask.name}
                                                                 taskOrder={currentTask.order}
                                                                 completed={currentTask.completed}
                                                                 deskOrder={this.props.deskOrder}
                                                                 completeTask={this.completeTask}
                                                                 deleteTask={this.deleteTask}/>)}
                </ol>
                <div>
                    <input type="input" className="deskInput" placeholder="Name of new task"/>
                    <input type="button" className="deskButton" value="Add new task"
                           onClick={() => this.createTask(this.props.deskOrder)}/>
                </div>
            </div>
        )
    }
}

export default Desk;
