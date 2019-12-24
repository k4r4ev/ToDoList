import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux';
import {createDesk, deleteAll} from '../actions/actions';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deskText: ""};
        this.maxDeskOrder = this.props.maxDeskOrder;
    }

    handleChangeDeskNameText = (event) => {
        this.setState({deskText: event.target.value})
    };

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="logo">ToDoList</div>
                    <div>
                        <input type="input" className="deskNameInput" placeholder="The name of the desk"
                               onChange={this.handleChangeDeskNameText} value={this.state.deskText}/>
                        <input type="button" className="deskAddingButton" value="Add new desk"
                               onClick={() => {
                                   this.props.createDesk({
                                       name: this.state.deskText,
                                       order: this.maxDeskOrder,
                                       tasks: []
                                   });
                                   this.setState({deskText: ""})
                               }}/>
                        <input type="button" className="deskRemoveButton" value="Delete all desk"
                               onClick={() => this.props.deleteAll()}/>
                    </div>
                </div>
                <div className="container">
                    {this.props.desks.map((currentDesk) => <Desk
                        name={currentDesk.name}
                        tasks={currentDesk.tasks}
                        deskOrder={currentDesk.order}/>)}
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
        deleteAll: () => dispatch(deleteAll()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body)
