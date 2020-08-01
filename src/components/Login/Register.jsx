import React, { Component } from 'react';
import './Login.scss'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameVal: '',
      emailVal: '',
      passVal: '',
      pass2Val: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'name':
        this.setState({
          nameVal: event.target.value
        })
        break;
      case 'email':
        this.setState({
          emailVal: event.target.value
        })
        break;
      case 'password':
        this.setState({
          passVal: event.target.value
        })
        break;
      case 'password2':
        this.setState({
          pass2Val: event.target.value
        })
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: this.state.nameVal,
      email: this.state.emailVal,
      password: this.state.passVal,
      password2: this.state.pass2Val
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch('http://localhost:5000/users/register', requestOptions)
      .then(response => console.log(response))
      .catch(err => console.log(err))

    this.props.onRouteChange('home')
  }

  render() {
    // const { nameVal, emailVal, passVal, pass2Val } = this.state 
    return (
      <div className='register-window border'>
        <form className="register-form"
          onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Register</legend>

            <label htmlFor="name" className="vhide">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <label htmlFor="email" className="vhide">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required minLength="2"
              onChange={this.handleChange}
            />

            <label htmlFor="password" className="vhide">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required minLength="6"
              onChange={this.handleChange}
            />

            <label htmlFor="password2" className='vhide'>Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />

            <button type="submit" className="signin">Register</button>
          </fieldset>
        </form>
        {/* <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p> */}
      </div>
    );
  }
}
