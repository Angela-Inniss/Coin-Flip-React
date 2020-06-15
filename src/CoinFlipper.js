import React, {Component} from "react";
import Coin from "./Coin";

import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
   this.state = {
     heads: false,
     tails: true,
     coinFlipCounter: 0,
     headsCount: 0,
     tailsCount: 0
   };
    this.flipCoin = this.flipCoin.bind(this);
  }


  flipCoin(e) {
    this.setState((prevState) => {
        return {
          heads: !prevState.heads,// true
          tails: !prevState.tails, // false
          coinFlipCounter:  prevState.coinFlipCounter + 1,
          // headsCount: prevState.heads ? prevState.headsCount + 1  :  !prevState.heads ? prevState.tailsCount + 1 : null
          headsCount: prevState.heads ? prevState.headsCount + 1 : prevState.headsCount,
          tailsCount: prevState.tails ? prevState.tailsCount + 1 : prevState.tailsCount,
       };
    }, () => {
      console.log({heads:this.state.heads}, {flipcounter:this.state.coinFlipCounter}, {tails:this.state.tails})
    });
  }

   render() {
    return (
      <div>
        <Coin heads={this.state.heads}/>
        <button onClick={this.flipCoin}>Flip </button>
        <p className="text">
          Out of <b> {this.state.coinFlipCounter}</b>flips there have been<b>{this.state.headsCount}</b> heads and <b>{this.state.tailsCount}</b> tails
        </p>
      </div>
    )
  }
}
export default CoinFlipper;


// The user should be able to click on a button to flip a coin.
// Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

