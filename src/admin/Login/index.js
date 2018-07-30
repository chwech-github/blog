import React, { Component } from 'react';
import './index.less'
class LoginPage extends Component {
  render () {
    return (
      <div className="login">
        <input className="username" placeholder="用户名" />
        <input className="password" placeholder="密码"/>
        <button className="submit-btn">登录</button>
      </div>
    )
  }
}

export default LoginPage