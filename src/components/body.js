import React from 'react';
import Desk from './desk';
import {connect} from 'react-redux'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deskText: ""};
    }

    handleChangeDeskText = (event) => {
        this.setState({deskText: event.target.value})
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
                               onClick={() => this.props.storageUpdate("createDesk", this.state.deskText)}/>
                        <input type="button" className="deskRemoveButton" value="Delete all desk"
                               onClick={() => this.props.storageUpdate("deleteAll")}/>
                    </div>
                </div>
                <div className="container">
                    {this.props.storage.desks.map((currentDesk) => <Desk
                        name={currentDesk.name}
                        tasks={currentDesk.tasks}
                        deskOrder={currentDesk.order}
                        storageUpdate={this.props.storageUpdate}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
};

export default connect(mapStateToProps)(Body);
