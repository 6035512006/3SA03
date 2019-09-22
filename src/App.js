import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import film from './Yugi_muto.png'
let message = 'Yugi'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
} //random

class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  } //check

  render() {  //create card
    return (


      <div>

        <img src={film} width="300" height="350" align="top" />


        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <h2></h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <div class='cc' >ROUND {this.state.attempt}</div>
        {
          this.state.completed && <h4>Complete</h4>
        }
        <h3>Player:6035512013 นายอภินันท์ สรสมศักดิ์</h3>

      </div>
    )
  }
}

export default App;