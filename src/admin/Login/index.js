import React, { Component } from 'react';
import './index.less'
import { fetchToken } from '../../api/login.js';
import logo from '../../logo.svg';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleSubmit () {
    const { history } = this.props
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    fetchToken(data).then(res => {
      console.log(res)
      if (res.data.status === 200) {
        alert(res.data.message)
        history.push('/index')
      } else {
        alert(res.data.message)
      }
    })
  }
  handleUserNameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  render () {
    return (
      <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div className="login">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input className="username" type="text" placeholder="用户名" value={this.state.value} onChange={this.handleUserNameChange.bind(this)}/>
        <input className="password" type="password" placeholder="密码" value={this.state.value} onChange={this.handlePasswordChange.bind(this)}/>
        <button className="submit-btn" onClick={this.handleSubmit.bind(this)}>登录</button>
      </div>
      </div>
    )
  }
}

export default LoginPage