import React, {Component} from 'react'
import superagent from 'superagent'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event) {
        this.setState ({
            userName: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState ({
            password: event.target.value
        })
    }

    onSubmit(event) {

        event.preventDefault();

        const url = 'http://localhost:8000/api/v1/login'

        superagent
            .post(url)
            .send({
                username: this.state.userName,
                password: this.state.password,
            })
            .then(response => {
                this.props.onLogin(response.body.token)
            })
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <label>User Name
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.onChangeUsername}
                />
            </label>
            <label>Password
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                <button>Log In</button>
            </label>
        </form>
        )
    }
}

export default LoginForm
