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
      password: window.btoa(this.state.password)
    }
    fetchToken(data).then(res => {
      if (res.data.status === 200) {
        alert(res.data.message)
        history.push('/index')
      } else {
        alert(res.data.message)
      }
    })
  }
  handleChange (event) {
    let target = event.target
    let name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }
  handleKeyDown (event) {
    if (event.keyCode === 13) {
      this.handleSubmit()
    }
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
        <input name="username" tabIndex="1" className="username" type="text" placeholder="用户名" onChange={this.handleChange.bind(this)}/>
        <input
          name="password" 
          onKeyDown={this.handleKeyDown.bind(this)}
          tabIndex="2" 
          className="password" 
          type="password" 
          placeholder="密码" 
          onChange={this.handleChange.bind(this)}/>
        <button tabIndex="3" className="submit-btn" onClick={this.handleSubmit.bind(this)}>登录</button>
      </div>
      </div>
    )
  }
}

export default LoginPage