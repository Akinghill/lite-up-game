import React from 'react'
import './ScoreBoard.css'
import data from './fakedata'
import { Component } from 'react'

export default class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:5000/users/', { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({ users: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    return (
      <div className='score-board contianer'>
        <h1 className='score-title'>TOP SCORES</h1>
        <div className='scores-grid'>
          {
            data.map((person, i) => (
              <p key={i}>
                {
                  `${i + 1}: 
                ${person.initials} \t 
                ${person.bestScore}`
                }
              </p>))
          }
        </div>
      </div >
    )
  }

}