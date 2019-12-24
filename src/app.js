import React from 'react';
import {Provider} from 'react-redux';

import Body from './components/body';
import store from './store/store';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {store};/*
        localStorage.removeItem('storage');
        let storage = {};
        storage.desks = this.state.desks;
        localStorage.setItem('storage', JSON.stringify(storage));*/
    }

    render() {
        return (
            <Provider store={store}>
                <Body/>
            </Provider>
        )
    }
}

export default App;
