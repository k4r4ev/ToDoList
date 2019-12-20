import React from "react";
import Desk from "./desk";

class Body extends React.Component {
    createDesk = () => {
        this.props.storage.createDesk();
        this.props.bodyUpdate();
    };

    deleteDesk = (deskOrder) => {
        this.props.storage.deleteDesk(deskOrder);
        this.props.bodyUpdate();
    };

    deleteAll = () => {
        this.props.storage.deleteAll();
        this.props.bodyUpdate();
    };

    render() {
        alert("bodyUpdate");
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
                        deleteDesk={this.deleteDesk}
                        deskUpdate={() => this.forceUpdate()}
                        storage={this.props.storage}/>)}
                </div>
            </div>
        )
    }
}

export default Body;
