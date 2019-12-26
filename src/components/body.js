import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux';
import {createDesk, deleteAll} from '../actions/actions';
import Modal from './modal';
import Overlay from './overlay';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

class Body extends React.Component {
    constructor(props) {
        super(props);
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

    deleteAllDesks = () => { //для модульного окна
        this.props.deleteAll();
        this.hideModal();
    };

    hideModal = () => { //для модульного окна
        this.setState({modalWindow: ""});
    };

    handleChangeDeskNameText = (event) => {
        this.setState({deskText: event.target.value});
        this.hideModal();
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
                        <IconButton aria-label="add" onClick={() => {
                            this.props.createDesk({
                                name: this.state.deskText,
                                order: this.setDeskOrder(),
                                tasks: []
                            });
                            this.setState({deskText: ""})
                        }}>
                            <AddIcon fontSize="large"/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => {//this.props.deleteAll();
                            this.setState({
                                modalWindow: <div><Modal deleteAllDesks={this.deleteAllDesks}
                                                         hideModal={this.hideModal}/><Overlay/></div>
                            })
                        }}>
                            <DeleteIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>
                <div className="container">
                    {this.props.desks.map((currentDesk) => <Desk
                        name={currentDesk.name}
                        tasks={currentDesk.tasks}
                        deskOrder={currentDesk.order}
                        setTaskOrder={this.setTaskOrder}/>)}
                </div>
            </div>
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
        createDesk: desk => dispatch(createDesk(desk)),
        deleteAll: desk => dispatch(deleteAll(desk))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body)
