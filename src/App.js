import React, {Component} from 'react';

import './App.css';

import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Stream from "./components/Stream/Stream";


class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
      video: false
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onSubmit = () => {
  }

  onSetState = () => {
      this.setState({video: true})

  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        {/*<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />*/}
        <Stream videoState={this.state.video} setVideoState={this.onSetState}/>
      </div>
    );
  }
}

export default App;
