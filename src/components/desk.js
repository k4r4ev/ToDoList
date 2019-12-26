import React from 'react';
import Task from './task';
import {createTask, deleteTask, deleteDesk} from '../actions/actions';
import {connect} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import AlarmIcon from '@material-ui/icons/Alarm';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
        this.props.deleteTask(taskOrder);
    };

    render() {
        return (
            <div className="desk" draggable="true">
                <div className="title">
                    <h2>{this.props.name}</h2>
                    <IconButton onClick={() => this.props.deleteDesk(this.props.deskOrder)} aria-label="delete">
                        <DeleteIcon fontSize="small"/></IconButton>
                </div>
                <hr/>
                <ol className="list">
                    {this.props.tasks.map((currentTask) => <Task name={currentTask.name}
                                                                 taskOrder={currentTask.order}
                                                                 completed={currentTask.completed}
                                                                 deskOrder={this.props.deskOrder}
                                                                 changeTask={this.changeTask}/>)}
                </ol>
                <div>

                    <TextField label="add new task" variant="standard" size="small"
                               InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <AlarmIcon/>
                                       </InputAdornment>
                                   ),
                               }}
                               onChange={this.handleChangeTaskText} value={this.state.taskText}/>
                    <IconButton aria-label="send" onClick={() => {
                        this.props.createTask({
                            deskOrder: this.props.deskOrder,
                            taskObj: {
                                name: this.state.taskText,
                                order: this.props.setTaskOrder(),
                                completed: false
                            }
                        });
                        this.setState({taskText: ""});
                    }}> <SendIcon fontSize="small"/></IconButton>
                </div>
            </div>
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
        deleteDesk: order => dispatch(deleteDesk(order)),
        deleteTask: order => dispatch(deleteTask(order)),
        createTask: task => dispatch(createTask(task))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Desk)
