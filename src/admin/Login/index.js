import React, { Component } from 'react';
import './index.less'
import { fetchToken } from '../../api/login.js';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleSubmit () {
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    fetchToken(data)
  }
  handleUserNameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  render () {
    return (
      <div className="login">
        <input className="username" type="text" placeholder="用户名" value={this.state.value} onChange={this.handleUserNameChange.bind(this)}/>
        <input className="password" type="password" placeholder="密码" value={this.state.value} onChange={this.handlePasswordChange.bind(this)}/>
        <button className="submit-btn" onClick={this.handleSubmit.bind(this)}>登录</button>
      </div>
    )
  }
}

export default LoginPage