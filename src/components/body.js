import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux';
import {createDesk, deleteAll} from '../actions/actions';
import Modal from "./modal";
import Overlay from "./overlay";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deskText: "", modalWindow: ""};
    }

    setDeskOrder = (desks = this.props.desks) => {
        let maxDeskOrder = 0;
        for (let i in desks) {
            if (desks[i].order > maxDeskOrder)
                maxDeskOrder = desks[i].order;
        }
        return ++maxDeskOrder;
    };

    setTaskOrder = (desks = this.props.desks) => {
        let maxTaskOrder = 0;
        for (let deskItem in desks) {
            for (let taskItem in desks[deskItem].tasks) {
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
                    <div>
                        <input type="input" className="deskNameInput" placeholder="The name of the desk"
                               onChange={this.handleChangeDeskNameText} value={this.state.deskText}/>
                        <input type="button" className="deskAddingButton" value="Add new desk"
                               onClick={() => {
                                   this.props.createDesk({
                                       name: this.state.deskText,
                                       order: this.setDeskOrder(),
                                       tasks: []
                                   });
                                   this.setState({deskText: ""})
                               }}/>
                        <input type="button" className="deskRemoveButton" value="Delete all desk"
                               onClick={() => {//this.props.deleteAll();
                                   this.setState({
                                       modalWindow: <div><Modal deleteAllDesks={this.deleteAllDesks}
                                                                hideModal={this.hideModal}/><Overlay/></div>
                                   })
                               }}/>
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
    localStorage.removeItem('storage');
    localStorage.setItem('storage', JSON.stringify(store));
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
