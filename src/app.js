import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import Body from './components/body'
import Login from './components/login'
import './app.css'

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Route exact path="/auth" component={Login}/>
                    <Route exact path="/app" component={Body}/>
                    <Redirect to="/auth"/>
                </Provider>
            </BrowserRouter>
        )
    }

}

export default App
