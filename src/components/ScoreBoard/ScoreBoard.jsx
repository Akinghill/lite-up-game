import React from 'react'
import './ScoreBoard.css'
// import data from './fakedata'
import { Component } from 'react'

export default class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topScores: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/highscores', { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({
          topScores:[
            {
              name: result[0].name
            },
            {
              name: result[1].name
            },
          ]
        })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    const data = this.state.topScores
    return (
      <div className='score-board contianer'>
        <h1 className='score-title'>TOP SCORES</h1>
        <div className='scores-grid'>
          {
            data.map((person, i) => (
              <p key={i}>
                {
                  `${i + 1}: 
                ${person.name} \t 
                ${'as'}`
                }
              </p>))
          }
        </div>
      </div >
    )
  }

}