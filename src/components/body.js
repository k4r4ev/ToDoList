import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux';
import {createDesk} from '../actions/actions';
import Modal from './modal';
import Overlay from './overlay';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.visibleDesks = [];
        this.state = {deskText: "", modalWindow: ""};
    }

    setDeskOrder = (desks = this.props.desks) => {
        let maxDeskOrder = 0;
        for (let deskItem = 0; deskItem < desks.length; deskItem++) {
            if (desks[deskItem].order > maxDeskOrder)
                maxDeskOrder = desks[deskItem].order;
        }
        return ++maxDeskOrder;
    };

    setTaskOrder = (desks = this.props.desks) => {
        let maxTaskOrder = 0;
        for (let deskItem = 0; deskItem < desks.length; deskItem++) {
            for (let taskItem = 0; taskItem < desks[deskItem].tasks.length; taskItem++) {
                if (desks[deskItem].tasks[taskItem].order > maxTaskOrder) {
                    maxTaskOrder = desks[deskItem].tasks[taskItem].order;
                }
            }
        }
        return ++maxTaskOrder;
    };

    hideModal = () => {
        this.setState({modalWindow: ""});
    };

    handleChangeDeskNameText = (event) => {
        this.setState({deskText: event.target.value});
        this.hideModal();
    };

    createDesk = () => {
        this.props.createDesk({
            name: this.state.deskText,
            order: this.setDeskOrder(),
            tasks: []
        });
        this.setState({deskText: ""});
    };

    showDesk = (currentDesk, index) => {
        if (this.props.deskIgnore.indexOf(currentDesk.order) === -1) {
            if (!this.visibleDesks.includes(currentDesk.order))
                this.visibleDesks.push(currentDesk.order);
            return <React.Fragment key={index}>
                <Desk
                    name={currentDesk.name}
                    tasks={currentDesk.tasks}
                    deskOrder={currentDesk.order}
                    setTaskOrder={this.setTaskOrder}/>
            </React.Fragment>
        }
    };

    deleteAllDesks = () => {
        this.setState({
            modalWindow: <div><Modal desks={this.visibleDesks} hideModal={this.hideModal}/><Overlay/></div>
        })
    };

    render() {
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
                    {this.props.desks.map((currentDesk, index) => this.showDesk(currentDesk, index))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        desks: store.main.desks,
        deskIgnore: store.modal.deskIgnore
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createDesk: desk => dispatch(createDesk(desk))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body)
