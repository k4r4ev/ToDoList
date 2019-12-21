import React from 'react';

import Data from './data';

import './app.css';

import Body from './components/body';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = new Data();
        this.state = {storage: this.data.storage};
    }

    storageUpdate = (method, args) => {
        let newStorage;
        switch (method) {
            case "completeTask":
                newStorage = this.data.completeTask(args);
                break;
            case "createDesk":
                newStorage = this.data.createDesk(args);
                break;
            case "createTask":
                newStorage = this.data.createTask(args);
                break;
            case "deleteAll":
                newStorage = this.data.deleteAll();
                break;
            case "deleteDesk":
                newStorage = this.data.deleteDesk(args);
                break;
            case "deleteTask":
                newStorage = this.data.deleteTask(args);
                break;
            default:
                break;
        }
        this.setState({storage: newStorage});
    };

    render() {
        return (
            <div>
                <Body storage={this.state.storage} storageUpdate={this.storageUpdate}/>
            </div>
        )
    }
}

export default App;
