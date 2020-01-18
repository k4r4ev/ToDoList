import React from 'react'
import Task from './task'
import { createTask, deleteTask } from '../actions/actions'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import SendIcon from '@material-ui/icons/Send'
import AlarmIcon from '@material-ui/icons/Alarm'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import Modal from './modal'
import Overlay from './overlay'

class Desk extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            taskText: '',
            modalWindow: ''
        }
    }

    hideModal = () => {
        this.setState({ modalWindow: '' })
    }

    handleChangeTaskText = (event) => {
        this.setState({ taskText: event.target.value })
    }

    changeTask = (taskOrder, taskName) => {
        this.setState({ taskText: taskName })
        this.props.deleteTask(taskOrder)
    }

    createTask = () => {
        this.props.createTask({
            deskOrder: this.props.deskOrder,
            taskObj: {
                name: this.state.taskText,
                order: this.props.setTaskOrder(),
                completed: false
            }
        })
        this.setState({ taskText: '' })
    }

    deleteDesk = () => {
        this.setState({
            modalWindow: <span><Modal desksId={[this.props.deskOrder]}
                                      hideModal={this.hideModal}/><Overlay/></span>
        })
    }

    render () {
        return (
            <div className="desk" draggable="true">
                {this.state.modalWindow}
                <div className="title">
                    <h2>{this.props.name}</h2>
                    <IconButton onClick={this.deleteDesk} aria-label="delete">
                        <DeleteIcon fontSize="small"/></IconButton>
                </div>
                <hr/>
                <List component="nav" aria-label="main mailbox folders">
                    {this.props.tasks.map((currentTask, index) =>
                        <React.Fragment key={index}>
                            <Task
                                name={currentTask.name}
                                index={index}
                                taskOrder={currentTask.order}
                                completed={currentTask.completed}
                                deskOrder={this.props.deskOrder}
                                changeTask={this.changeTask}/>
                        </React.Fragment>
                    )}
                </List>
                <div>
                    <TextField label="add new task" color="secondary" variant="standard" size="small"
                               InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <AlarmIcon/>
                                       </InputAdornment>
                                   ),
                               }}
                               onChange={this.handleChangeTaskText} value={this.state.taskText}/>
                    <IconButton aria-label="send" onClick={() => {
                        this.createTask()
                    }}> <SendIcon/></IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        desks: store.main.desks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: order => dispatch(deleteTask(order)),
        createTask: task => dispatch(createTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk)
