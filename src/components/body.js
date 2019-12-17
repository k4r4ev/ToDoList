import React from "react";
import Desk from "./desk";
import Data from "../data";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.storage = new Data();
        console.log(this.storage);
    }

    deskStateHandler = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    clearAll = () => {
        document.getElementById("container").innerHTML = "";
        this.storage.createDesk();
    };

    render() {
        return (
            <div>
                <div className="panel" id="panel">
                    <div className="logo">ToDoList</div>
                    <div>
                        <input type="input" id="deskName" class="panelInput1" placeholder="The name of the desk"/>
                        <input type="button" id="createDesk" class="panelInput2" onClick={this.deskStateHandler}
                               value="Add new desk"/>
                        <input type="button" id="clear" class="panelInput3" onClick={this.clearAll}
                               value="Delete all desk"/>
                    </div>
                </div>
                <div className="container" id="container">
                    {[...Array(this.state.count)].map(() => <Desk name={this.storage.storage.desks[0].name}
                                                                  tasks={this.storage.storage.desks[0].tasks}
                                                                  storage={this.storage}/>)}
                </div>
            </div>
        )
    }
}

export default Body;
