import React from "react";

const Coin = (props) => {
  // console.log(props);
  return (
    <div>
     {props.heads ?
       <img alt="heads-side-of-coin" width="100px" src="https://tinyurl.com/react-coin-heads-jpg"/>
       :
       <img alt="tails-side-of-coin" width="100px" src="https://tinyurl.com/react-coin-tails-jpg"/>
     }
   </div>
  )
};

export default Coin;


// this is the smallest component
// it is a dumb component which I presume houses the coin image
// one for heads and one for tails
// two props? heads and tails?
// if heads is true displayheads, if tails is true show tails
