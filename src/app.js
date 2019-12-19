import React from "react";


import Data from "./data";

import './app.css';

import Body from "./components/body";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.storage = new Data();
    }

    render() {
        return (
            <div>
                <Body storage={this.storage} update={() => this.forceUpdate()}/>
            </div>
        )
    }
}

export default App;
