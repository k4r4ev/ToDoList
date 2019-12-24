import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux'
import {createDesk} from '../actions/actions'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deskText: ""};
    }

    handleChangeDeskText = (event) => {
        this.setState({deskText: event.target.value})
    };

    createDesk = (desk) => {
        this.props.createDesk(desk)
    };

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="logo">ToDoList</div>
                    <div>
                        <input type="input" className="deskNameInput" placeholder="The name of the desk"
                               onChange={this.handleChangeDeskText}/>
                        <input type="button" className="deskAddingButton" value="Add new desk"
                               onClick={() => this.createDesk(this.state.deskText)}/>
                        <input type="button" className="deskRemoveButton" value="Delete all desk"
                            /*onClick={() => this.props.storageUpdate("deleteAll")}*//>
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
    return {
        desks: store.desks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createDesk: desk => dispatch(createDesk(desk)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)
