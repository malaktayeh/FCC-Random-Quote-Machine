import React, { Component } from 'react';
import TwitterButton from './components/TwitterButton'
import NewQuoteButton from './components/NewQuoteButton'
import DisplayQuote from './components/DisplayQuote'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <DisplayQuote />
          <NewQuoteButton />
          <TwitterButton />
        </div>
      </div>
    );
  }
}

export default App;
