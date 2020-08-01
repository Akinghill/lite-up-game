import React, { Component } from 'react';
import './Login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target);
    // const data = new URLSearchParams();
    // for (const pair of new FormData(event.target)) {
    //   data.append(pair[0], pair[1]);
    // }
    // console.log(data)

    // fetch('http://localhost:5000/users/login', {
    //   method: 'POST',
    //   body: data
    // }).then(response => console.log(response))
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
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

  render() {
    return (
      <div className='login-window border'>
        <form action="/users/login" method="POST" className="login-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign In</legend>

            <label forhtml="email" className="vhide">Email</label>
            <input id="loginEmail" name="email" type="text" placeholder="Email" required minLength="2" />

            <label forhtml="password" className="vhide">Password</label>
            <input id="loginPassword" name="password" type="text" placeholder="Password" required minLength="6" />

            <button type="submit" className="signin">Sign in</button>
            <button className="signin" onClick={() => this.props.onRouteChange('register')}>Register</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

// this.props.onRouteChange('home')
