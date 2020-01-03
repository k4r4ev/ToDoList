import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/ListItem'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            nickname: '',
            password: ''
        }
    }

    handleChangeNickname = (event) => {
        this.setState({ nickname: event.target.value })
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    getLink = () => {
        if (this.state.nickname === 'admin' && this.state.password === 'admin') {
            return '/app'
        }
    }

    render () {
        return (
            <div className="login">
                <p>Authorization</p>
                <TextField label="nickname" onChange={this.handleChangeNickname} variant="outlined" size="small"/>
                <TextField label="password" onChange={this.handleChangePassword} variant="outlined" size="small"/>
                <Typography align="center">
                    <Link to={this.getLink} button component={RouterLink}>Enter</Link>
                </Typography>
            </div>
        )
    }
}

export default Login
