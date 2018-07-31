import React, { Component } from 'react';
import './index.less'
import { fetchToken } from '../../api/login.js';
class LoginPage extends Component {
  handleSubmit () {
    fetchToken()
  }
  render () {
    return (
      <div className="login">
        <input className="username" placeholder="用户名" />
        <input className="password" placeholder="密码"/>
        <button className="submit-btn" onClick={this.handleSubmit}>登录</button>
      </div>
    )
  }
}

export default LoginPage