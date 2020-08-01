import React, { Component } from 'react';
import './Login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'loginEmail':
        this.setState({
          loginEmail: event.target.value
        })
        break;
      case 'loginPassword':
        this.setState({
          loginPassword: event.target.value
        })
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch('http://localhost:5000/users/login', requestOptions)
      .then(response => response.json())
      .then(user => {
        console.log(user)
        if (user._id) {
          console.log('found the user')
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <div className='login-window border'>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign In</legend>

            <label forhtml="email" className="vhide">Email</label>
            <input
              id="loginEmail"
              name="email"
              type="text"
              placeholder="Email"
              required minLength="2"
              onChange={this.handleChange}
            />

            <label forhtml="password" className="vhide">Password</label>
            <input
              id="loginPassword"
              name="password"
              type="text"
              placeholder="Password"
              required minLength="6"
              onChange={this.handleChange}
            />

            <button type="submit" className="signin">Sign in</button>
            <button className="signin" onClick={() => this.props.onRouteChange('register')}>Register</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

