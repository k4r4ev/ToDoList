import React from 'react';
import {deleteTask, completeTask} from '../actions/actions';
import {connect} from "react-redux";

class Task extends React.Component {
    render() {
        let liClass;
        let changeTask;
        let completeTask;
        if (this.props.completed === true) {
            liClass = "completed";
        } else {
            changeTask = <a onClick={() => this.props.changeTask(this.props.taskOrder, this.props.name)}>change</a>;
            completeTask = <a onClick={() => this.props.completeTask(this.props.taskOrder)}>complete</a>
        }
        return (
            <span>
                <li className={liClass}>{this.props.name}</li>
                <span>
                    {changeTask}
                    {completeTask}
                    <a onClick={() => this.props.deleteTask(this.props.taskOrder)}>delete</a>
                </span>
            </span>
        )
    }
}

const mapStateToProps = store => {
    localStorage.removeItem('storage');
    localStorage.setItem('storage', JSON.stringify(store));
    return {
        desks: store.desks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: order => dispatch(deleteTask(order)),
        completeTask: order => dispatch(completeTask(order))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task)
