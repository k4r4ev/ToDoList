import React from 'react';
import {deleteTask, completeTask} from '../actions/actions';
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


class Task extends React.Component {
    render() {
        let liClass = "task";
        let changeTask;
        let completeTask;
        if (this.props.completed === true) {
            liClass = "task completed";
        } else {
            changeTask = <IconButton onClick={() => this.props.changeTask(this.props.taskOrder, this.props.name)}
                                     aria-label="edit" size="small"><EditIcon fontSize="small"/></IconButton>;
            completeTask = <IconButton onClick={() => this.props.completeTask(this.props.taskOrder)}
                                       aria-label="add" size="small"><AddIcon fontSize="small"/></IconButton>;
        }
        return (
            <ListItem button>
                <ListItemText className={liClass} size="large" primary={this.props.name}/>
                <span>
                    {changeTask}
                    <IconButton onClick={() => this.props.deleteTask(this.props.taskOrder)} aria-label="delete"
                                size="small"> <DeleteIcon fontSize="small"/></IconButton>
                    {completeTask}
                </span>
            </ListItem>
        )
    }
}

const mapStateToProps = store => {
    localStorage.removeItem("storage");
    localStorage.setItem("storage", JSON.stringify(store));
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
