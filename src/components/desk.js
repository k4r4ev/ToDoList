import React from "react";
import Task from "./task";

class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.storage = this.props.storage;
    }

    taskStateHandler = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    createDesk = () => {
        this.storage.storage.desks[0].tasks.push(document.getElementById("ol1_input").value);
        console.log(this.storage);
    };

    deleteDesk = () => {

    };

    render() {
        return (
            <div id="d1" className="desk" draggable="true">
                <div className="title">
                    <h2>{this.props.name}</h2>
                    <a onClick={this.deleteDesk}>delete</a>
                </div>
                <hr/>
                <ol className="list" id="ol1">
                    {[...Array(this.state.count)].map(() => <Task name="task"/>)}
                </ol>
                <hr/>
                <div>
                    <input type="input" class="deskInput" placeholder="Name of new task" id="ol1_input"/>
                    <input type="button" class="deskButton" onClick={this.taskStateHandler} value="Add new task"/>
                </div>
            </div>
        )
    }
}

export default Desk;
