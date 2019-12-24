import React from 'react';
import {Provider} from 'react-redux';

import Body from './components/body';
import store from './store/store';
import './app.css';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Body/>
            </Provider>
        )
    }
}

export default App;
