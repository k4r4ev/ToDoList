import React from "react";
import Desk from "./desk";

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    createDesk = () => {
        this.props.storage.createDesk();
        this.props.update();
    };

    deleteDesk = (deskOrder) => {
        this.props.storage.deleteDesk(deskOrder);
        this.props.update();
    };

    createTask = (deskOrder) => {
        this.props.storage.createTask(deskOrder);
        this.props.update();
    };

    completeTask = (deskOrder, taskOrder) => {
        this.props.storage.completeTask(deskOrder, taskOrder);
        this.props.update();
    };

    deleteTask = (deskOrder, taskOrder) => {
        this.props.storage.deleteTask(deskOrder, taskOrder);
        this.props.update();
    };

    deleteAll = () => {
        this.props.storage.deleteAll();
        this.props.update();
    };

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="logo">ToDoList</div>
                    <div>
                        <input type="input" className="panelInput" placeholder="The name of the desk"/>
                        <input type="button" className="panelButton1" onClick={this.createDesk} value="Add new desk"/>
                        <input type="button" className="panelButton2" onClick={this.deleteAll} value="Delete all desk"/>
                    </div>
                </div>
                <div className="container">
                    {this.props.storage.storage.desks.map((currentDesk) => <Desk
                        name={currentDesk.name}
                        tasks={currentDesk.tasks}
                        deskOrder={currentDesk.order}
                        createTask={this.createTask}
                        deleteTask={this.deleteTask}
                        deleteDesk={this.deleteDesk}
                        completeTask={this.completeTask}/>)}
                </div>
            </div>
        )
    }
}

export default Body;
