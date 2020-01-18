import React from 'react'
import Desk from './desk'
import { connect } from 'react-redux'
import { clearDeleteList, createDesk, deleteDesk } from '../actions/actions'
import Modal from './modal'
import Overlay from './overlay'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

class Body extends React.Component {
    constructor (props) {
        super(props)
        this.desksId = []
        this.state = {
            deskText: '',
            modalWindow: '',
            desksIdToDelete: []
        }
    }

    setDeskOrder = (desks = this.props.desks) => {
        let maxDeskOrder = 0
        for (let deskItem = 0; deskItem < desks.length; deskItem++) {
            if (desks[deskItem].order > maxDeskOrder) {
                maxDeskOrder = desks[deskItem].order
            }
        }
        return ++maxDeskOrder
    }

    setTaskOrder = (desks = this.props.desks) => {
        let maxTaskOrder = 0
        for (let deskItem = 0; deskItem < desks.length; deskItem++) {
            for (let taskItem = 0; taskItem < desks[deskItem].tasks.length; taskItem++) {
                if (desks[deskItem].tasks[taskItem].order > maxTaskOrder) {
                    maxTaskOrder = desks[deskItem].tasks[taskItem].order
                }
            }
        }
        return ++maxTaskOrder
    }

    hideModal = () => {
        this.setState({ modalWindow: '' })
    }

    handleChangeDeskNameText = (event) => {
        this.setState({ deskText: event.target.value })
        this.hideModal()
    }

    deleteDesks = () => {
        if (this.props.desksIdToDelete.length !== 0) {
            this.props.desksIdToDelete.map(current => this.props.deleteDesk(current))
            this.desksId = []
            this.props.clearDeleteList()
        }
    }

    prepareDesk = (currentDesk, index) => {
        if (!this.desksId.includes(currentDesk.order)) {
            this.desksId.push(currentDesk.order)
        }
        return <React.Fragment key={index}>
            <Desk
                name={currentDesk.name}
                tasks={currentDesk.tasks}
                deskOrder={currentDesk.order}
                setTaskOrder={this.setTaskOrder}/>
        </React.Fragment>
    }

    createDesk = () => {
        this.props.createDesk({
            name: this.state.deskText,
            order: this.setDeskOrder(),
            tasks: []
        })
        this.setState({ deskText: '' })
    }

    deleteAllDesks = () => {
        this.setState({
            modalWindow: <div><Modal desksId={this.desksId} hideModal={this.hideModal}/><Overlay/></div>
        })
    }

    render () {
        this.deleteDesks()
        return (
            <div>
                {this.state.modalWindow}
                <div className="panel">
                    <div className="logo">ToDoList</div>
                    <div className="header">
                        <TextField label="name of desk" variant="outlined" size="small"
                                   onChange={this.handleChangeDeskNameText} value={this.state.deskText}/>
                        <IconButton aria-label="add" onClick={() => this.createDesk()}>
                            <AddIcon fontSize="large"/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={this.deleteAllDesks}>
                            <DeleteIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>
                <div className="container">
                    {this.props.desks.map((currentDesk, index) => this.prepareDesk(currentDesk, index))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        desks: store.main.desks,
        desksIdToDelete: store.modal.desksId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDesk: desk => dispatch(createDesk(desk)),
        deleteDesk: order => dispatch(deleteDesk(order)),
        clearDeleteList: () => dispatch(clearDeleteList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
