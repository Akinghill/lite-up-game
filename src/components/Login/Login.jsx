import React, { Component } from 'react';
import './Login.scss'

export default class Login extends Component {
  render() {
    return (
      <div className='login-window border'>
        <form action="/users/login" method="POST" className="login-form">
          <fieldset>
            <legend>Sign In</legend>

            <label forhtml="email" className="vhide">Email</label>
            <input id="email" name="email" type="text" placeholder="Email" required minLength="2" />

            <label forhtml="password" className="vhide">Password</label>
            <input id="password" name="password" type="text" placeholder="Password" required minLength="6" />

            <button className="signin">Sign in</button>

          </fieldset>

        </form>
      </div>
    );
  }
}
