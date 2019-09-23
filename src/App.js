import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import pic from './Yugi_muto.png'

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
        <br></br><br></br><br></br><br></br>
        <img src={pic} width="300" height="250" align="top" />
        <br></br>
                                {
                                  Array.from(this.state.chars).map((item, index) => (
                                    <CharacterCard
                                      value={item}
                                      key={index}
                                      activationHandler={this.activationHandler}
                                    />
                                  ))
                                }
                                <br></br>
                                <br></br>
                                <br></br>
                                <center>
                                  <div class='turn' >Turn {this.state.attempt} !</div>
                                </center>
                                {
                                  Array.from(this.state.guess).map((item, index) => (
                                    <CharacterCard
                                      value={item}
                                      key={index}
                                      activationHandler={this.activationHandler}
                                    />
                                  ))
                                }
        {
          this.state.completed && <center><h4>Complete</h4></center>
        }
        
      </div>
    );
  }
}
export default App;