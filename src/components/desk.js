import React from "react";
import Task from "./task";

class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskNumber: 1
        };
        this.storage = this.props.storage;
    }

    increaseTaskNumber = () => {
        this.setState({
            taskNumber: this.state.taskNumber + 1,
        });
    };

    reduceTaskNumber = () => {
        this.setState({
            taskNumber: this.state.taskNumber - 1,
        });
    };

    render() {
        return (
            <div id={"d" + this.props.deskOrder} className="desk" draggable="true">
                <div className="title">
                    <h2>{"#" + this.props.deskOrder + " " + this.props.name}</h2>
                    <a onClick={this.props.reduceDeskNumber}>delete</a>
                    <a>
                        <div className="circle blue"/>
                    </a>
                    <a>
                        <div className="circle red"/>
                    </a>
                    <a>
                        <div className="circle green"/>
                    </a>
                </div>
                <hr/>
                <ol className="list" id={"ol" + this.props.deskOrder}>
                    {[...Array(this.state.taskNumber)].map((currentElement, index) => <Task name="task"
                                                                                            deskOrder={this.props.deskOrder}
                                                                                            taskOrder={index + 1}
                                                                                            reduceTaskNumber={this.reduceTaskNumber}/>)}
                </ol>
                <div>
                    <input type="input" class="deskInput" placeholder="Name of new task"
                           id={"ol" + this.props.deskOrder + "_input"}/>
                    <input type="button" class="deskButton" onClick={this.increaseTaskNumber} value="Add new task"/>
                </div>
            </div>
        )
    }
}

export default Desk;
