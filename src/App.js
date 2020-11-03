import React, {Component} from 'react';
import './App.css';
import Game from './Game'

class App extends Component {
  constructor() {
    super()
    this.allCards = ['#fca7f3 ', 'white', ' #6da740  ','  #f6faba  ', ' #ccc5c1 ', '  #f7791f  ', ' #575657 ', ' #03faf5 ', ' #13afdb ', ' #7509e2 ', ' #63522e ', ' #d809e2 ', '#060606', '#fd2f03',' #effa17 ',' #33fb2d ']
    this.state = {load: "no", currentDeck: [' #ccc5c1 ', '  #f7791f  ', ' #575657 ', ' #03faf5 ',]}
  }

  diffMenu = () => {
    document.getElementById('title2').innerHTML = "Don't click the same color twice!"
    document.getElementById('title2').style.color = 'indianred' 
    this.setState({load: "no"})
  }

  changeDifficulty = (e) => {
    document.getElementById('title2').innerHTML = "Don't click the same color twice!"
    document.getElementById('title2').style.color = 'indianred' 
    let newDeck = []
    let howManyCards = e.target.value 
    for (let i = 0; i < howManyCards; i++) {
      newDeck.push(this.allCards[i])
    }
    this.setState({currentDeck: newDeck, load: 'yes'}) 
  }

  onColor = (e) => {
    e.target.style.color = "orangered"
  }
  offColor = (e) => {
    e.target.style.color = "indianred"
  }

  render() {    
  return (
    <div className="App">
      <div id="main">
      <h1 id="title">Color Memory Game</h1>
      <h1 id="title2">Don't click the same color twice!</h1>
      {this.state.load === "yes" ? <button onClick={this.diffMenu} className="changeDifficulty">Change Difficulty</button> : <div style={{fontSize: "30px", color: "indianred"}}>Select a difficulty:</div>}
      {this.state.load === "yes" ? <Game deck={this.state.currentDeck} /> : <div id="diffButs">
      <button onClick={this.changeDifficulty} value="4" className="difficulty">Easy</button>
      <br/>
      <button onClick={this.changeDifficulty} value="8" className="difficulty">Medium</button>
      <br/>
      <button onClick={this.changeDifficulty} value="12" className="difficulty">Hard</button>
      <br/>
      <button onClick={this.changeDifficulty} value="16" className="difficulty">Very Hard</button>
      </div>}
      <label>{Game.score}</label>
      <h1 id="credit">
Background photo by <a style={{textDecoration: "none", color: "indianred"}} onMouseOver={this.onColor} onMouseOut={this.offColor} href="https://www.pexels.com/@deeanacreatesDeeana">Deeana Creates</a> from <a onMouseOver={this.onColor} style={{textDecoration: "none", color: "indianred"}} onMouseOut={this.offColor} href="www.pexels.com">Pexels</a>
</h1>
      </div>
    </div>
  );
  }
}

export default App;