import React, { Component } from 'react';

import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0,
      images: [...Array(16)].map((_, i) => `${i + 1}.jpg`),
      clickedImages: [],
      game: 0
    };
  }

  handleClick(image) {
    if (this.state.score === this.state.images.length) {
      this.setState({ topScore: this.state.images.length });
      return;
    }
    if (this.state.clickedImages.indexOf(image) === -1) {
      let shuffled = [...this.state.images].sort(() => Math.random() - 0.5);

      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, image],
        images: shuffled
      });
    } else {
      this.setState({
        score: 0,
        topScore: Math.max(this.state.topScore, this.state.score),
        clickedImages: [],
        game: this.state.game + 1
      });
    }
  }

  render() {
    var message;

    if (this.state.game > 0) {
      if (this.state.clickedImages.length == 0) {
        message = 'You clicked incorrectly';
      } else if (this.state.score === this.state.images.length) {
        message = 'You win';
      }
    }

    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore} message={message} />
        <div className="App-imageContainer">
          {this.state.images.map((image) => (
            <div className="App-image" onClick={() => this.handleClick(image)}>
              <img key={image} src={require(`./images/${image}`)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
