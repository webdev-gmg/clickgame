import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    clicked:[],
    info:""
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      console.log(this.state.clicked)
      const nowScore = this.state.currentScore + 1
     this.setState({currentScore:nowScore})
     // this.handleIncrement();
     console.log(this.state.currentScore)
      this.setState({
        clicked: this.state.clicked.concat(id),
        
      });
      if (nowScore >= this.state.topScore) {
        this.setState({ topScore: nowScore });
      } else if (nowScore === 12) {
        this.setState({ info: "Good job!" });
      }
      this.handleShuffle();
    } else {
      this.setState({
        currentScore: 0,
        topScore: this.state.topScore,
        clicked: [],
        info:"Play Again"
      });
    }
  };


  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.currentScore}
          topScore={this.state.topScore} info={this.state.info}>Cartoon List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
