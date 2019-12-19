import React from "react";
import Desk from "./desk";
import Data from "../data";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.storage = new Data();
        this.state = {
            deskNumber: this.storage.storage.desks.length
        };
        console.log(this.storage);
    }

    createDesk = () => {
        this.setState({
            deskNumber: this.state.deskNumber + 1,
        });
        this.storage.createDesk();
    };

    reduceDeskNumber = () => {
        this.setState({
            deskNumber: this.state.deskNumber - 1,
        });
    };

    deleteAll = () => {
        document.getElementById("container").innerHTML = "";
        this.storage.deleteAll();
    };

    render() {
        return (
            <div>
                <div className="panel" id="panel">
                    <div className="logo">ToDoList</div>
                    <div>
                        <input type="input" id="deskName" class="panelInput" placeholder="The name of the desk"/>
                        <input type="button" id="createDesk" class="panelButton1" onClick={this.createDesk}
                               value="Add new desk"/>
                        <input type="button" id="clear" class="panelButton2" onClick={this.deleteAll}
                               value="Delete all desk"/>
                    </div>
                </div>
                <div className="container" id="container">
                    {this.storage.storage.desks.map((currentElement, index) => <Desk
                        name={this.storage.storage.desks[index].name}
                        tasks={this.storage.storage.desks[index].tasks}
                        reduceDeskNumber={this.reduceDeskNumber}
                        deskOrder={index + 1}
                        storage={this.storage}/>)}
                </div>
            </div>
        )
    }
}

export default Body;
